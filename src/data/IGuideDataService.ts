import { Guide } from './Guide';
import { GuideType } from './GuideType';
import { GuideStatus } from './GuideStatus';
import { PageData } from './PageData';

export interface IGuideDataService {
    readGuides(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readRandomGuide(params: any, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readIntroGuides(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readGuide(id: string, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    createGuide(data: Guide, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): void;
    updateGuide(id: string, data: Guide, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): void;
    deleteGuide(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void;
}


