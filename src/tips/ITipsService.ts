export interface ITipsService {
    filterTips(data: any[], topic: string): any[];
    showTips(tips: any[], ln: string, $event ? : any): void;
    firstShowTips(tips: any[], language: string, topic: string, settings: any, dayC: number): void;
    getTips(party: any, ln: string, topic: string,  callback ?: (...args) => void)
}