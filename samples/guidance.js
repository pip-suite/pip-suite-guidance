/**
 * @file Guidance page for sample application
 * @copyright Digital Living Software Corp. 2014-2016
 */

(function (angular) {
    'use strict';

    var thisModule = angular.module('pipSampleGuidance', ['pipTranslate', 'pipRest', 'pipGuidance', 'pipPictures']);

    thisModule.config(function (pipTranslateProvider, pipAuthStateProvider) {

        //Set translation strings for the module
        pipTranslateProvider.translations('en', {
            MORE_URL: 'See more',
            NEXT: 'Next',
            GUIDE: 'Guidance',
            GUIDE_DIALOG: 'More Guide dialog',
            GUIDE_TIP: 'Guide tip',
            OPEN_GUIDE_DIALOG: 'Open guide dialog',
            OPEN_GUIDE_TIP: 'Open guide tip',
            OPEN_GUIDE_INTRO_DIALOG: 'Open guide intro dialog',
            GUIDE_INTRO_DIALOG: 'Intro guide dialog',
            OPEN_GUIDE_RELEASE_DIALOG: 'Open guide release dialog',
            GUIDE_RELEASE_DIALOG: 'Release guide dialog'
        });

        pipTranslateProvider.translations('ru', {
            MORE_URL: 'Больше по ссылке',
            NEXT: 'Следующая',
            GUIDE: 'Рекомендации',
            GUIDE_DIALOG: 'Произвольный диалог рекомендаций',
            GUIDE_TIP: 'Совет',
            OPEN_GUIDE_DIALOG: 'Открыть произвольный диалог рекомендаций',
            OPEN_GUIDE_TIP: 'Открыть совет',
            OPEN_GUIDE_INTRO_DIALOG: 'Открыть диалог введения',
            GUIDE_INTRO_DIALOG: 'Диалог введения',
            OPEN_GUIDE_RELEASE_DIALOG: 'Открыть диалог релиза',
            GUIDE_RELEASE_DIALOG: 'Диалог релиза'
        });

        // Configure module routes
        pipAuthStateProvider
            .state('guidance', {
                url: '/guidance',
                controller: 'SampleGuidanceController',
                templateUrl: 'guidance.html',
                auth: true
            });
    });

    thisModule.controller('SampleGuidanceController',
        function ($scope, $mdDialog, $rootScope, pipGuidance, pipTips, pipPopoverService, pipNavService, $timeout, pipTranslate) {
            $rootScope.$on('pipLanguageChanged', function() {
                $scope.language = pipTranslate.language;
                $scope.$reset = true;
                $timeout(() => {
                    $scope.$reset = false;
                }, 0);
            });
    
            $scope.language = pipTranslate.language;

            $timeout(function () {
                $('pre code').each(function (i, block) {
                    Prism.highlightElement(block);
                });
            });

            $scope.settings = _.defaults($rootScope.$settings, { intro: {}, release: {} });
            $scope.onGuideDialog = onGuideDialog;
            $scope.showIntroGuidance = showIntroGuidance;
            $scope.showReleaseGuidance = showReleaseGuidance;
            $scope.showTips = showTips;

            showAppBar();

            $scope.guide = {
                app: "notes",
                pages: [
                    {
                        title: { en: "Title <br>1 bbbbbbbb", ru: "Русский заголовок <br><br>a a a a a a a a a a a a a a a a a a a a a aa " },
                        content: { en: "Пригадайте, ким ви мріяли бути, допоки <b>життя не</b> внесло <br><br>жорстких корективів, якими талантами були обдаровані. І дайте відповідь на непросте запитання: «Ким би ви могли стати?» Цікаві й оригінальні вправи допоможуть визначитися з цілями, розробити та візуалізувати стратегію їх досягнення та навчать долати труднощі. Переборіть свій страх, відпустіть минуле й рухайтеся вперед, бо життя надто коротке, а ваш унікальний потенціал надто цінний, аби марнувати його. Невпинно мрійте, міцно стійте ногами на землі та втілюйте свою мрію в життя!", 
                        ru: "Пригадайте, ким ви мріяли бути, допоки життя не внесло жорстких корективів, якими талантами були обдаровані. І дайте відповідь на непросте запитання: «Ким би ви могли стати?» Цікаві й оригінальні вправи допоможуть визначитися з цілями, розробити та візуалізувати стратегію їх досягнення та навчать долати труднощі. Переборіть свій страх, відпустіть минуле й рухайтеся вперед, бо життя надто коротке, а ваш унікальний потенціал надто цінний, аби марнувати його. Невпинно мрійте, міцно стійте ногами на землі та втілюйте свою мрію в життя!" },
                        more_url: "www.rambler.ru", 
                        pic_uri: 'http://www.velostyle.com.ua/images/product_images/popup_images/139140.jpg',
                        color: "cyan"
                    },
                    {
                        title: { en: "Title 2", ru: "Aa" },
                        content: { en: "Text 2", ru: "Conveniently transition optimal <b>e-commerce</b> rather than B2B partnerships. Conveniently benchmark high-quality mindshare rather than fully tested architectures. Efficiently embrace premium users and accurate products. Credibly actualize interactive mindshare before robust methodologies" },
                        color: "cyan",
                        pic_id: 'f37658a0f2554e519aaa0e106851d184',
                        more_url: "www.rambler.ru", 
                    },
                    {
                        title: { en: "Title 2", ru: "Aa" },
                        content: { en: "Text 2", ru: "Conveniently transition optimal <b>e-commerce</b> rather than B2B partnerships. Conveniently benchmark high-quality mindshare rather than fully tested architectures. Efficiently embrace premium users and accurate products. Credibly actualize interactive mindshare before robust methodologies" },
                        color: "cyan",
                        pic_id: 'f37658a0f2554e519aaa0e106851d185',
                        more_url: "www.rambler.ru", 
                    },
                    {
                        title: { en: "Title 2", ru: "Aa" },
                        content: { en: "Text 2", ru: "Conveniently transition optimal <b>e-commerce</b> rather than B2B partnerships. Conveniently benchmark high-quality mindshare rather than fully tested architectures. Efficiently embrace premium users and accurate products. Credibly actualize interactive mindshare before robust methodologies" },
                        color: "cyan",
                        pic_id: 'f37658a0f2554e519aaa0e106851d186',
                        more_url: "www.rambler.ru", 
                    },
                    {
                        title: { en: "Title 2", ru: "Aa" },
                        content: { en: "Text 2", ru: "Conveniently transition optimal <b>e-commerce</b> rather than B2B partnerships. Conveniently benchmark high-quality mindshare rather than fully tested architectures. Efficiently embrace premium users and accurate products. Credibly actualize interactive mindshare before robust methodologies" },
                        color: "cyan",
                        pic_id: 'f37658a0f2554e519aaa0e106851d187',
                        more_url: "www.rambler.ru", 
                    }
                    
                ],
                // pictures: [
                //     // 'http://www.velostyle.com.ua/images/product_images/popup_images/139140.jpg',
                //     // 'http://rjnzhfvfnthjdbx.gorod.tomsk.ru/posts-files/74/223/i/25.jpg'
                // ],
                status: "new",
                topic: "ffff444",
                type: "intro"
            };

            return;

            function showIntroGuidance() {
                pipGuidance.showIntroGuidance();
            }

            function showReleaseGuidance() {
                pipGuidance.showReleaseGuidance();
            }

            function onGuideDialog() {
                pipGuidance.showGuide(
                    $scope.guide,
                    'en',
                    () => {
                        console.log('showGuide callback');
                    },
                    () => {
                        console.log('showGuide error');
                    });
            }

            function showTips() {
                let newSiteTip = {
                    id: '0',
                    creator: {
                        id: '',
                        name: '',
                    },
                    create_time: new Date(),
                    topics: [],
                    title: {
                        'ru': 'jjk kjk jhkj kj hgjkghkj',
                        'en': 'kj hkjhkjhkjhkjhkj'
                    },
                    content: {
                        'ru': 'jhjghjg jhgjhgjhg jhg',
                        'en': 'j jhjhgjhgjhgjh g'
                    },
        
                };
                pipTips.showTips([newSiteTip], pipTranslate.language);
                // var title = 'Some long or not very long title1';
                // pipPopoverService.show({
                //     class: 'pip-tip',
                //     cancelCallback: function () {
                //         console.log('backdrop clicked');
                //     },
                //     locals: {
                //         title: title
                //     },
                //     controller: function ($scope, $timeout, pipMedia) {

                //         $scope.title = $scope.locals.title;
                //         $scope.content = 'Completely synthesize high standards in products without stand-alone action items. Dramatically synergize customized models after competitive networks. Progressively optimize highly efficient internal or "organic" sources and cost effective imperatives. Uniquely drive client-based growth strategies vis-a-vis backward-compatible bandwidth. Authoritatively seize clicks-and-mortar models through magnetic paradigms. Interactively.';
                //         $scope.image = 'https://pp.vk.me/c7004/v7004812/1cbe4/SlAPkJDiUn4.jpg';
                //         $scope.link = 'http://github.com/pip-life/pip-life/issues';

                //         $scope.pipMedia = pipMedia;

                //         position();

                //         $scope.onNextClick = function () {
                //             pipPopoverService.hide();
                //         };

                //         $scope.$on('pipWindowResized', position);

                //         function position() {
                //             $timeout(function () {
                //                 var backdropElement = $('.pip-popover-backdrop'),
                //                     popover = backdropElement.find('.pip-popover');
                //                 popover.find('.pip-pic').css('background-image', 'url(' + $scope.image + ')');

                //             }, 100);
                //         }
                //     },
                //     templateUrl: 'tips/TipTemplate.html'
                // });
            }

            function showAppBar() {
                pipNavService.icon.showMenu();
                pipNavService.breadcrumb.text = 'GUIDE';
                pipNavService.appbar.part('actions', 'language')
                // pipNavService.appbar.addShadow();
            }

        }
    );

})(window.angular);
