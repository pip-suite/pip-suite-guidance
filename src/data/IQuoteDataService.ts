import { Quote } from './Quote';
 
export interface IQuoteDataService {
    readQuotes(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readRandomQuote(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readQuote(id: string, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    createQuote(data: Quote, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): void;
    updateQuote(id: string, data: Quote, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): void;
    deleteQuote(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void;
}
