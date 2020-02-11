/// <reference path="../../typings/tsd.d.ts" />

{
    /**
     * @ngdoc service
     * @name pipReleaseIntroDialog.pipReleaseIntroDialog
     *
     * @description
     * Provides API to show intro dialog.
     */
    class ReleaseIntroDialog {
        constructor(
            private $mdDialog: angular.material.IDialogService
        ) {}

        /**
         * @ngdoc method
         * @methodOf pipReleaseIntroDialog.pipReleaseIntroDialog
         * @name pipReleaseIntroDialog.pipReleaseIntroDialog:show
         *
         * @description
         * Shows dialog panel. Shown dialog can be close by click on backdrop space. Into callback function is
         * passed nothing data.
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/intro_guidance/intro_guidance_dialog.js#L50 View source}
         * 
         * @param {Object} params   Options for dialog panel.
         * @param {Function=} successCallback   Callback function is invoked on success dialog close.
         * @param {Function=} cancelCallback    Callback function is invoked on error event.
         *
         */
        public show(params, successCallback, cancelCallback) {
            this.$mdDialog.show({
                    targetEvent: params.event,
                    templateUrl: 'intro_guidance/IntroGuidanceDialog.html',
                    controller: ReleaseIntroDialogController,
                    controllerAs: '$ctrl',
                    locals: {
                        params: params // todo params class
                    },
                    clickOutsideToClose: true
                })
                .then(() => {
                    if (successCallback) {
                        successCallback();
                    }
                }, () => {
                    if (cancelCallback) {
                        cancelCallback();
                    }
                });
        }
    }

    const config = (pipTranslateProvider: pip.services.ITranslateProvider) => {
        pipTranslateProvider.translations('en', {
            GUIDANCE_TITLE: 'What should you do here?',
            GUIDANCE_ACTION: 'Do it now!',
            GUIDANCE_DO_NOT_SHOW: "Don't show it again",
            GUIDE_COMPLETE_BUTTON: 'GOT IT !'
        });
        pipTranslateProvider.translations('ru', {
            GUIDANCE_TITLE: 'Что здесь делать?',
            GUIDANCE_ACTION: 'Сделать это сейчас!',
            GUIDANCE_DO_NOT_SHOW: 'Не показывать это снова',
            GUIDE_COMPLETE_BUTTON: 'Закончить просмотр'
        });
    };

    class ReleaseIntroDialogController {
        public theme: string;
        public number: number;
        public ln: string;
        public data: any;
        public isOpen: boolean = true;

        constructor(
            private $scope: ng.IScope,
            private $rootScope: ng.IRootScopeService,
            private pipTranslate: pip.services.ITranslateService,
            private $mdDialog: angular.material.IDialogService,
            public pipMedia: pip.layouts.IMediaService,
            private pipPictureData: pip.pictures.IPictureDataService,
            private params: any
        ) {
            this.theme = $rootScope[pip.themes.ThemeRootVar];

            const guide = this.params.guide;
            this.number = 0;
            this.ln = this.params.ln || this.pipTranslate.language || 'en';
            this.data = guide;

            _.each(this.data.pages, function (page) {
                if (page.pic_id) {
                    var picId = page.pic_id;

                    page.picIds = [];
                    page.picIds.push(picId);

                    page.pic_id_url = pipPictureData.getPictureUrl(page.pic_id);
                }
                if (page.pic_uri) {
                    var picUri = page.pic_uri;

                    page.picUris = [];
                    page.picUris.push(picUri);
                }
            });

        }

        // Process user actions
        // --------------------

        public onChangePage(newNumber) {
            this.number = newNumber;
            this.isOpen = false;
        };

        public onBackPage() {
            if (this.number !== 0) {
                this.number -= 1;
            }
            this.isOpen = false;
        };
        
        public onNextPage() {
            if (this.number !== this.data.pages.length - 1) {
                this.number += 1;
            }
            this.isOpen = false;
        };

        public onKeyDown($event: KeyboardEvent): void {
            if (!$event) return
            if ($event.key == 'ArrowRight') {
                this.onNextPage();
            }
            if ($event.key == 'ArrowLeft') {
                this.onBackPage();
            }
            if ($event.keyCode == 32) {
                this.onNextPage();
            }
            this.isOpen = false;
        }


        public onClose() {
            // if intro show
            this.$mdDialog.hide();
        };
    }

    angular.module('pipReleaseIntroDialog')
        .config(config)
        .service('pipReleaseIntroDialog', ReleaseIntroDialog);

}