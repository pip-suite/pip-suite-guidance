import { ITipsService } from '../tips/ITipsService';
import { IQuotesService } from './IQuotesService';
import { Quote } from '../data/Quote';
{
    class QuotesService implements IQuotesService {
        private quotes: any[];

        constructor(
            private pipPopoverService: pip.controls.IPopoverService,
            private $timeout: angular.ITimeoutService,
            private $rootScope: angular.IRootScopeService,
            private pipTips: ITipsService
        ) { }

        private checkStatus(item): boolean {
            return item.status == 'completed' ? true : false;
        }

        private compareRandom(a, b): number {
            return Math.random() - 0.5;
        }

        public filterQuotes(data: any[], topic: string): any {
            let quotes: any[];
            let quotesCollection: any[] = _.filter(data, this.checkStatus);
            if (topic) {
                quotes = [];
                for (let index = 0; index < quotesCollection.length; index++) {
                    const topic = _.find(quotesCollection[index].tags, function (t) {
                        return t == topic
                    });
                    if (topic) {
                        quotes.push(quotesCollection[index]);
                    }
                }
            } else {
                quotes = quotesCollection;
            }

            quotes.sort(this.compareRandom);

            return quotes;
        }

        public quoteController($scope, pipMedia): void {
            const init = () => {
                if ($scope.locals.quotes[$scope.index].author)
                    $scope.author = $scope.locals.quotes[$scope.index].author[$scope.locals.ln] ?
                    $scope.locals.quotes[$scope.index].author[$scope.locals.ln] : $scope.locals.quotes[$scope.index].author['en'];
                if ($scope.locals.quotes[$scope.index].text)
                    $scope.content = $scope.locals.quotes[$scope.index].text[$scope.locals.ln] ? $scope.locals.quotes[$scope.index].text[$scope.locals.ln] :
                    $scope.locals.quotes[$scope.index].text['en'];

                $scope.link = $scope.locals.quotes[$scope.index].more_url;
            }

            $scope.index = 0;
            $scope.pipMedia = pipMedia;

            init();

            $scope.onNextClick = function () {
                $scope.index++;
                if ($scope.index == $scope.locals.quotes.length)
                    this.pipPopoverService.hide();
                else {
                    init();
                    this.pipPopoverService.resize();
                }

            };

            $scope.$on('pipWindowResized', init);
        }

        public showQuotes(quotes: any[], ln: string, $event? : any): void {
            if (quotes && quotes.length > 0) {
                this.pipPopoverService.hide();

                this.pipPopoverService.show({
                    element: $event ? $event.currentTarget : null,
                    class: 'pip-quote',
                    cancelCallback: () => {
                        return false;
                    },
                    locals: {
                        quotes: quotes,
                        ln: ln || 'en'
                    },
                    controller: ['$scope', 'pipMedia', this.quoteController],
                    templateUrl: 'quotes/QuoteTemplate.html'
                });
            }
        }

        public waitUserTipsQuotes(tips: any[], quotes: any[], ln: string): void {
            let idleTimer = null;
            let idleState = false;
            let idleWait = 180000;

            $(document).ready(() => {
                $(document).bind('click keydown scroll', () => {
                    this.$timeout.cancel(idleTimer);

                    idleState = false;
                    idleTimer = this.$timeout(() => {
                        this.pipPopoverService.hide();
                        if (!quotes) {
                            this.pipTips.showTips(tips, ln);
                        } else {
                            if (!tips) {
                                this.showQuotes(quotes, ln, null);
                            } else {
                                Math.random() < 0.5 ? this.pipTips.showTips(tips, ln) : this.showQuotes(quotes, ln, null);
                            }
                        }
                        idleState = true;
                    }, idleWait);
                });

                $("body").trigger("click");
            });
        }

    }

    angular.module('pipQuotes.Service', ['pipGuidance.Templates', 'pipGuidance', 'pipControls', 'pipQuoteData'])
        .service('pipQuotes', QuotesService);
}