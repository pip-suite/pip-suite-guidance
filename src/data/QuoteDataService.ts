import { IQuoteDataService } from './IQuoteDataService';
import { Quote } from './Quote';
import { PageData } from './PageData';

class QuoteData implements IQuoteDataService {
    private RESOURCE: string = 'quotes';
    private RESOURCE_RANDOM: string = 'quotesRandom'; 

    private PAGE_SIZE: number = 100;
    private PAGE_START: number = 0;
    private PAGE_TOTAL: boolean = true;

    constructor(
        private pipRest: pip.rest.IRestService,
        private pipFormat: pip.services.IFormat
    ) {
        "ngInject";

    }

    public readQuotes(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }

        return this.pipRest.getResource(this.RESOURCE).page(params, successCallback, errorCallback);
    }

    public readRandomQuote(params: any, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        params = params || {};
        if (params.filter) {
            params.filer = this.pipFormat.filterToString(params.filer);
        }

        return this.pipRest.getResource(this.RESOURCE_RANDOM).get(params, successCallback, errorCallback);
    }

    public readQuote(id: string, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): angular.IPromise<any> {
        return this.pipRest.getResource(this.RESOURCE).get(
            { quote_id: id },
            successCallback,
            errorCallback
        );
    }

    public createQuote(data: Quote, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).save(
            null,
            data,
            successCallback,
            errorCallback
        );
    }

    public updateQuote(id: string, data: Quote, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).update(
            { quote_id: id },
            data,
            successCallback,
            errorCallback
        );
    }

    public deleteQuote(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void {
        this.pipRest.getResource(this.RESOURCE).remove(
            { quote_id: id },
            null,
            successCallback,
            errorCallback
        );
    }

}


angular
    .module('pipQuoteData', ['pipRest', 'pipServices'])
    .service('pipQuoteData', QuoteData);

