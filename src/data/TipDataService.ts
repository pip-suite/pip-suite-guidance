import { ITipDataService } from './ITipDataService';
import { Tip } from './Tip';
import { PageData } from './PageData';

class TipData implements ITipDataService {
    private RESOURCE: string = 'tips';
    private RESOURCE_RANDOM: string = 'tipsRandom'; 

    private PAGE_SIZE: number = 100;
    private PAGE_START: number = 0;
    private PAGE_TOTAL: boolean = true;

    constructor(
        private pipRest: pip.rest.IRestService,
        private pipFormat: pip.services.IFormat
    ) {
        "ngInject";

    }

    public readTips(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }

        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    }

    public readRandomTip(params: any, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }

        return this.pipRest.getResource(this.RESOURCE_RANDOM).get(params, successCallback, errorCallback);
    }

    public readTip(id: string, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        return this.pipRest.getResource(this.RESOURCE).get(
            { tip_id: id },
            successCallback,
            errorCallback
        );
    }

    public createTip(data: Tip, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).save(
            null,
            data,
            successCallback,
            errorCallback
        );
    }

    public updateTip(id: string, data: Tip, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).update(
            { tip_id: id },
            data,
            successCallback,
            errorCallback
        );
    }

    public deleteTip(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).remove(
            { tip_id: id },
            null,
            successCallback,
            errorCallback
        );
    }

}


angular
    .module('pipTipData', ['pipRest', 'pipServices'])
    .service('pipTipData', TipData);

