declare module pip.guidance {

export class Attachment {
    id?: string;
    uri?: string;
    name?: string;
}

export class Guide {
    id: string;
    name?: string;
    type: string;
    app?: string;
    min_ver?: number;
    max_ver?: number;
    create_time: Date;
    pages: GuidePage[];
    tags?: string[];
    all_tags?: string[];
    status?: string;
    custom_hdr?: any;
    custom_dat?: any;
}


export class GuidePage {
    title: MultiString;
    content?: MultiString;
    more_url?: string;
    color?: string;
    pic_id?: string;
    pic_uri?: string;
}

export class GuideStatus {
    static readonly New: string;
    static readonly Writing: string;
    static readonly Translating: string;
    static readonly Verifying: string;
    static readonly Completed: string;
}

export class GuideType {
    static readonly Introduction: string;
    static readonly NewRelease: string;
}

export interface IGuideDataService {
    readGuides(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readRandomGuide(params: any, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readIntroGuides(params: any, successCallback?: (data: PageData) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readGuide(id: string, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    createGuide(data: Guide, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): void;
    updateGuide(id: string, data: Guide, successCallback?: (data: Guide) => void, errorCallback?: (error: any) => void): void;
    deleteGuide(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void;
}


export interface IQuoteDataService {
    readQuotes(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readRandomQuote(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readQuote(id: string, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    createQuote(data: Quote, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): void;
    updateQuote(id: string, data: Quote, successCallback?: (data: Quote) => void, errorCallback?: (error: any) => void): void;
    deleteQuote(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void;
}

export interface ITipDataService {
    readTips(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readRandomTip(params: any, successCallback?: (data: any) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    readTip(id: string, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): angular.IPromise<any>;
    createTip(data: Tip, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): void;
    updateTip(id: string, data: Tip, successCallback?: (data: Tip) => void, errorCallback?: (error: any) => void): void;
    deleteTip(id: string, successCallback?: () => void, errorCallback?: (error: any) => void): void;
}

export class MultiString {
    [language: string]: string;
}

export class PageData {
    data: any[];
    total: number;
}

export class PartyReference {
    id: string;
    name?: string;
    email?: string;
}

export class Quote {
    id: string;
    text: MultiString;
    author: MultiString;
    status: string;
    tags: string[];
    all_tags: string[];
}


export class QuoteStatus {
    static readonly New: string;
    static readonly Writing: string;
    static readonly Translating: string;
    static readonly Verifying: string;
    static readonly Completed: string;
}

export class Tip {
    id: string;
    topics: string[];
    creator: PartyReference;
    create_time: Date;
    title?: MultiString;
    content?: MultiString;
    more_url?: string;
    pics?: Attachment[];
    docs?: Attachment[];
    tags?: string[];
    all_tags?: string[];
    status?: string;
    custom_hdr?: any;
    custom_dat?: any;
}


export class TipStatus {
    static readonly New: string;
    static readonly Writing: string;
    static readonly Translating: string;
    static readonly Verifying: string;
    static readonly Completed: string;
}


function pipGuideDataConfig(pipRestProvider: pip.rest.IRestProvider): void;


function configQuoteResources(pipRestProvider: pip.rest.IRestProvider): void;

function pipTipDataConfig(pipRestProvider: pip.rest.IRestProvider): void;

export interface IQuotesService {
    filterQuotes(data: any[], topic: string): any[];
    showQuotes(quotes: any[], ln: string, $event?: any): void;
    waitUserTipsQuotes(tips: any[], quotes: any[], ln: string): void;
}


export interface IIntroGuidanceService {
    showReleaseGuidance(filter: string, successCallback?: () => void, errorCallback?: () => void): void;
    showIntroGuidance(filter: string, successCallback?: () => void, errorCallback?: () => void): void;
    showGuide(guide: Guide, ln: string, successCallback?: () => void, errorCallback?: () => void): void;
    findIntroReleaseGuide(guides: Guide[], settings: any, appName: string): Guide;
}




export interface ITipsService {
    filterTips(data: any[], topic: string): any[];
    showTips(tips: any[], ln: string, $event?: any): void;
    firstShowTips(tips: any[], language: string, topic: string, settings: any, dayC: number): void;
    getTips(party: any, ln: string, topic: string, callback?: (...args) => void): any;
}


}
