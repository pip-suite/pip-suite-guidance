import { IGuideDataService } from '../data';
import { GuideType } from '../data';
import { GuideStatus } from '../data';
import { Guide } from '../data';
import { IIntroGuidanceService } from './IIntroGuidanceService';

{
    /**
     * @ngdoc service
     * @name pipIntroGuidance.Service.pipGuidance
     *
     * @description
     * Service provides an interface to show introduction guide.
     *
     * @requires pipReleaseIntroDialog
     */

    class IntroGuidanceService implements IIntroGuidanceService {
        constructor(
            private pipReleaseIntroDialog: any, 
            private pipGuideData: IGuideDataService,
            private pipTranslate: pip.services.ITranslateService,
            private $rootScope: ng.IRootScopeService
        ) { }

        public showReleaseGuidance(filter: string, successCallback?: () => void, errorCallback?: () => void): void {
            this.pipGuideData.readGuides(
                {
                    filter: filter
                },
                (guides: any) => {
                    guides = _.filter(guides.data, (guide: any) => {
                        return guide.type = GuideType.NewRelease && guide.status === GuideStatus.Completed;
                    });
                    if (guides.length > 0) {
                        this.pipReleaseIntroDialog.show({
                            guide: guides[0],
                            ln: this.pipTranslate.language
                        }, successCallback, errorCallback);
                    }
                }, errorCallback);
        }

        public showIntroGuidance(filter: string, successCallback?: () => void, errorCallback?: () => void): void {
            this.pipGuideData.readIntroGuides(
                {
                    filter: filter
                },
                (guides: any) => {
                    guides = _.filter(guides.data, function (guide: any) {
                        return guide.type = GuideType.Introduction && guide.status === GuideStatus.Completed;
                    });
                    if (guides.length > 0) {
                        this.pipReleaseIntroDialog.show({
                            guide: guides[0],
                            ln: this.pipTranslate.language
                        }, successCallback, errorCallback);
                    }
                }, errorCallback);
        }

        /**
         * @ngdoc method
         * @methodOf pipIntroGuidance.Service.pipGuidance
         * @name pipIntroGuidance.Service.pipGuidance:showIntroReleaseGuide
         *
         * @description
         * Shows introduction guide
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/intro_guidance/intro_guidance_service.js#L51 View source}
         *
         * @param {Object} guide    Collection with intro information
         * @param {string} ln       Tips content language
         *
         * @example
         * <pre>
         *     pipGuidance.showIntroReleaseGuide($scope.guide, 'en');
         * </pre>
         */
        public showGuide(guide: Guide, ln: string, successCallback?: () => void, errorCallback?: () => void): void {
            if (guide) {
                this.pipReleaseIntroDialog.show({
                    guide: guide,
                    ln: ln
                }, successCallback, errorCallback);
            }
        }

        /**
         * @ngdoc method
         * @methodOf pipIntroGuidance.Service.pipGuidance
         * @name  pipIntroGuidance.Service.pipGuidance:findIntroReleaseGuide
         *
         * @description
         * Finds guideline due to passed settings options.
         *
         * {@link https://github.com/pip-webui/pip-webui-guidance/blob/master/src/intro_guidance/intro_guidance_service.js#80 View source}
         *
         * @param {Object} guides   Collection of guides
         *
         * @return {Object} Sorted guideline. Result is dependece on 'settings.intro' field. If it is existed than it returns
         * intro guide with 'completed' status.
         */
        public findIntroReleaseGuide(guides: Guide[], settings: any, appName: string): Guide {
            let guidesSort;
            // TODO intro and release - key constant
            const app = appName;
            if (!settings && !settings[app] || !settings[app].intro || !settings[app].intro.lastId) {
                // TODO [apidhirnyi] Make chaining for filter and sortBy
                guidesSort = _.filter(guides, (guide: Guide) => {
                    return guide.type === GuideType.Introduction && guide.status === GuideStatus.Completed && guide.app === app;
                });

                guidesSort = _.sortBy(guidesSort, (guide: Guide) => {
                    return -moment(guide.create_time).valueOf();
                });

                return guidesSort[0];
            }

            guidesSort = _.filter(guides, (guide: Guide) => {
                return guide.type === GuideType.NewRelease && guide.status === GuideStatus.Completed && guide.app === app;
            });

            guidesSort = _.sortBy(guidesSort, (guide: Guide) => {
                return -moment(guide.create_time).valueOf();
            });

            if (!settings[app].intro.create_time || (guidesSort.length > 0 &&
                new Date(settings[app].intro.create_time) < new Date(guidesSort[0].create_time) &&
                guidesSort[0].id != settings.release.lastId)) {

                return guidesSort[0];
            }

            return null;
        }

    }

    angular.module('pipIntroGuidance.Service', ['pipReleaseIntroDialog', 'pipGuideData', 'pipPictures.Data'])
        .service('pipGuidance', IntroGuidanceService);
}