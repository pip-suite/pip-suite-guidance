import { Guide } from '../data';

export interface IIntroGuidanceService {
    showReleaseGuidance(filter: string, successCallback?: () => void, errorCallback?: () => void): void;
    showIntroGuidance(filter: string, successCallback?: () => void, errorCallback?: () => void): void;
    showGuide(guide: Guide, ln: string, successCallback?: () => void, errorCallback?: () => void): void;
    findIntroReleaseGuide(guides: Guide[], settings: any, appName: string): Guide
}