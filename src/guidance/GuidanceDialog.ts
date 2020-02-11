{

    /**
     * @ngdoc service
     * @name pipGuidance.Dialog:pipGuidanceDialog
     *
     * @description
     * Reproduced API to show guidance dialog stretched out on a whole screen.
     * It is included a navigation and allows users to go back through guide.
     */
    class GuidanceDialog {
        constructor(private $mdDialog: angular.material.IDialogService) {}
        /**
         * @ngdoc method
         * @methodOf pipGuidance.Dialog:pipGuidanceDialog
         * @name pipGuidance.Dialog.pipGuidanceDialog:show
         *
         * @description
         * Shows guidance panel. Shown guidance can be close by click on backdrop space. Into callback function is
         * passed nothing data.
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/guidance/guidance_dialog.js#L50 View source}
         *
         * @param {Object} params   Options for dialog panel.
         * @param {Function=} successCallback   Callback function is invoked on success dialog close.
         * @param {Function=} cancelCallback    Callback function is invoked on error event.
         */
        public show(params, successCallback, cancelCallback) {
            this.$mdDialog.show({
                    targetEvent: params.event,
                    templateUrl: 'guidance/GuidanceDialog.html',
                    controller: GuidanceDialogController,
                    controllerAs: '$ctrl',
                    locals: {
                        params: params
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
            GUIDANCE_DO_NOT_SHOW: "Don't show it again"
        });
        pipTranslateProvider.translations('ru', {
            GUIDANCE_TITLE: 'Что здесь делать?',
            GUIDANCE_ACTION: 'Сделать это сейчас!',
            GUIDANCE_DO_NOT_SHOW: 'Не показывать это снова'
        });
    };

    class GuidanceDialogController {
        public theme: string;
        public title: string;
        public imageUrl: string;
        public imageWidth: string;
        public imageHeight: string;
        public action: string;
        public content: any;
        public hideToggle: any;
        public showHideToggle: any;
        

        constructor(
            $scope: ng.IScope, 
            $rootScope: ng.IRootScopeService, 
            private $mdDialog: angular.material.IDialogService, 
            private pipTranslate: pip.services.ITranslateService,
            private params: any
        ) {
            this.theme = $rootScope[pip.themes.ThemeRootVar];
            this.title = params.title || 'GUIDANCE_TITLE';

            this.imageUrl = params.imageUrl || '';
            this.imageWidth = params.imageWidth || '100%';
            this.imageHeight = params.imageHeight || '150px';

            this.content = params.content;
            this.action = params.action || 'GUIDANCE_ACTION';
            this.hideToggle = params.hideToggle;
            this.showHideToggle = params.hideToggleCallback != null;
        }

        public onCancel() {
            this.$mdDialog.cancel();
        }

        public onAction() {
            this.$mdDialog.hide();
        }

        public onHideToggle() {
            if (this.params.hideToggleCallback) {
                this.params.hideToggleCallback(this.hideToggle);
            }
        }

        public getContent(content) {
            let language = this.pipTranslate.language || 'en';
            return content && content[language] ? content[language] : '';
        }

    }

    angular.module('pipGuidance.Dialog', ['ngMaterial', 'pipTranslate', 'pipGuidance.Templates'])
        .config(config)
        .service('pipGuidanceDialog', GuidanceDialog);

}