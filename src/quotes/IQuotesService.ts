export interface IQuotesService {
    filterQuotes(data: any[], topic: string): any[];
    showQuotes(quotes: any[], ln: string, $event? : any): void;
    waitUserTipsQuotes(tips: any[], quotes: any[], ln: string): void;
}