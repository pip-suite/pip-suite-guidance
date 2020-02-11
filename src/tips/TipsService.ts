import { ITipsService } from './ITipsService';
import { ITipDataService } from '../data';


{
    /**
     * @ngdoc service
     * @name pipTips.Service.pipTips
     *
     * @description
     * Service provides an interface to manage tips state.
     * The service is available only on run phase.
     */
    class TipsService implements ITipsService {
        private tips: any[]; // todo

        constructor(
            private $rootScope: ng.IRootScopeService,
            private pipPopoverService: pip.controls.IPopoverService,
            private pipTipData: ITipDataService
            // private pipRest: pip.rest.IRestService,
            // private pipSettingsData: any
        ) {}

        private checkStatus = (item) => {
            return item.status === 'completed';
        }

        private compareRandom = () => {
            return Math.random() - 0.5;
        }

        /**
         * @ngdoc method
         * @methodOf pipTips.Service.pipTips
         * @name pipTips.Service.pipTips:filterTips
         *
         * @description
         * Filters passed tips by passed topic and sorts result collection.
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/tips/tips_service.js#L63 View source}
         *
         * @param {Array} data  Source array of tips entities
         * @param {string} topic    Name of topic to filter by it
         *
         * @returns {Array} Filtered and sorted collection.
         *
         * @example
         * <pre>
         *     pipTips.filterTips(tips, 'goals');
         * </pre>
         */
        public filterTips(data: any[], topic: string) {
            this.tips = [];
            let tipsCollection = _.filter(data, this.checkStatus);

            for (let index = 0; index < tipsCollection.length; index++) {
                const t = _.find(tipsCollection[index].topics, (t) => {
                    return t == topic;
                });

                if (t) {
                    this.tips.push(tipsCollection[index]);
                }
            }

            this.tips.sort(this.compareRandom);

            return this.tips;
        }

        public tipController($scope, $timeout, pipMedia) {
            const init = () => {
                $scope.title = $scope.locals.tips[$scope.index].title[$scope.locals.ln];
                $scope.content = $scope.locals.tips[$scope.index].content[$scope.locals.ln];
                // todo grab pictures
                // if ($scope.locals.tips[$scope.index].pic_id) {
                //     $scope.image = this.pipRest.serverUrl + '/api/parties/' + $scope.locals.tips[$scope.index].creator_id +
                //         '/files/' + $scope.locals.tips[$scope.index].pic_id + '/content';
                // }

                $scope.link = $scope.locals.tips[$scope.index].more_url;

                if ($scope.image) {
                    $timeout(() => {
                        const backdropElement = $('.pip-popover-backdrop'),
                            popover = backdropElement.find('.pip-popover');

                        popover.find('.pip-pic').css('background-image', 'url(' + $scope.image + ')');
                    }, 100);
                }
            }

            $scope.index = 0;
            $scope.pipMedia = pipMedia;

            init();

            $scope.onNextClick = () => {
                $scope.index++;

                if ($scope.index === $scope.locals.tips.length) {
                    this.pipPopoverService.hide();
                } else {
                    init();
                    this.pipPopoverService.resize();
                }
            };

            $scope.$on('pipWindowResized', init);
        }

        /**
         * @ngdoc method
         * @methodOf pipTips.Service.pipTips
         * @name pipTips.Service.pipTips:showTips
         *
         * @description
         * Shows tip to user.
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/tips/tips_service.js#L144 View source}
         *
         * @param {Array} tips  Array of tips
         * @param {string} ln   Chosen language
         * @param {Object=} [$event=null]    Event object
         *
         * @example
         * <pre>
         *      pipTips.showTips(tips, 'en');
         * </pre>
         */
        public showTips(tips: any[], ln: string, $event ? : any) {
            if (tips && tips.length > 0) {
                this.pipPopoverService.hide();
                this.pipPopoverService.show({
                    element: $event ? $event.currentTarget : null,
                    class: 'pip-tip',
                    cancelCallback: function () {
                        return false;
                    },
                    locals: {
                        tips: tips,
                        ln: ln || 'en'
                    },
                    controller: ['$scope', '$timeout', 'pipMedia', this.tipController],
                    templateUrl: 'tips/TipTemplate.html'
                });
            }
        }

        /**
         * @ngdoc method
         * @methodOf pipTips.Service.pipTips
         * @name pipTips.Service.pipTips:firstShowTips
         *
         * @description
         * Shows a tip
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/tips/tips_service.js#L181 View source}
         *
         * @param {Array} tips  Collection of tips
         * @param {string} [ln='en']   Language for tip content
         * @param {string} topic    Name of needed topic
         * @param {Object} settings Settings object
         * @param {Object} [dayC=2]   Days amount throughout tips should be shown
         */
        public firstShowTips(tips: any[], language: string, topic: string, settings: any, dayC: number) {
            // let ln = language || 'en',
            //     dayCount = dayC || 2,
            //     now = new Date(),
            //     show;

            // if (settings && settings[topic].tips) {
            //     show = (now.getTime() - new Date(settings[topic].tips).getTime()) / (1000 * 60 * 60 * 24);

            //     // TODO [apidhirnyi] Extract the same code part into the function
            //     if (show > dayCount) {
            //         this.pipPopoverService.hide();
            //         this.showTips(tips, ln);
            //         settings[topic].tips = new Date();
            //         this.pipSettingsData.saveSettings(settings, topic);
            //     }
            // } else if (settings[topic]) {
            //     this.pipPopoverService.hide();
            //     this.showTips(tips, ln);
            //     settings[topic].tips = new Date();
            //     this.pipSettingsData.saveSettings(settings, topic);
            // }
        }

        /**
         * @ngdoc method
         * @methodOf pipTips.Service.pipTips
         * @name pipTips.Service.pipTips:getTips
         *
         * @description
         * Returns tips collection according to topic.
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/tips/tips_service.js#L220 View source}
         *
         * @param {Object} party    User's party object
         * @param {string} ln       Language for tip content
         * @param {string} topic    Name of needed topic
         * @param {Function} callback   Callback function. It gets tips collection as argument.
         */
        public getTips(party: any, ln: string, topic: string, callback ?: (...args) => void) {

            this.pipTipData.readTips({},
                (result) => {
                    this.filterTips(result.data, topic);

                    if (callback) {
                        callback(this.tips);
                    }

                    return this.tips;
                },
                () => {
                    return null;
                }
            );
        }
    }

    angular.module('pipTips.Service', ['pipGuidance.Templates', 'pipControls', 'pipTipData'])
        .service('pipTips', TipsService);
}