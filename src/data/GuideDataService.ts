import { IGuideDataService } from './IGuideDataService';
import { Guide } from './Guide';
import { GuideType } from './GuideType';
import { GuideStatus } from './GuideStatus';
import { PageData } from './PageData';

class GuideData implements IGuideDataService {
    private RESOURCE: string = 'guides';
    private RESOURCE_RANDOM: string = 'guidesRandom'; 

    private PAGE_SIZE: number = 100;
    private PAGE_START: number = 0;
    private PAGE_TOTAL: boolean = true;

    constructor(
        private pipRest: pip.rest.IRestService,
        private pipFormat: pip.services.IFormat
    ) {
        "ngInject";

    }

    public readGuides(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }

        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    }

    public readRandomGuide(params: any, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }

        return this.pipRest.getResource(this.RESOURCE_RANDOM).get(params, successCallback, errorCallback);
    }

    public readIntroGuides(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        let filter = params.filter || {};
        filter.type = GuideType.Introduction;
        filter.status = GuideStatus.Completed; 
        params.filer = this.pipFormat.filterToString(filter);

        return this.pipRest.getResource(this.RESOURCE).page(
            params,
            successCallback,
            errorCallback
        );
    }

    public readGuide(id: string, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        return this.pipRest.getResource(this.RESOURCE).get(
            { guide_id: id },
            successCallback,
            errorCallback
        );
    }

    public createGuide(data: Guide, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).save(
            null,
            data,
            successCallback,
            errorCallback
        );
    }

    public updateGuide(id: string, data: Guide, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).update(
            { guide_id: id },
            data,
            successCallback,
            errorCallback
        );
    }

    public deleteGuide(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).remove(
            { guide_id: id },
            null,
            successCallback,
            errorCallback
        );
    }
}


angular
    .module('pipGuideData', ['pipRest', 'pipServices'])
    .service('pipGuideData', GuideData);


