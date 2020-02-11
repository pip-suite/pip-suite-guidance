import { Tip } from './Tip';


export interface ITipDataService {
    readTips(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readRandomTip(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readTip(id: string, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    createTip(data: Tip, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): void;
    updateTip(id: string, data: Tip, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): void;
    deleteTip(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void;
}
