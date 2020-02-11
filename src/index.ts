/// <reference path="../typings/tsd.d.ts" />

import './rest';
import './data';
import './intro_guidance';
import './guidance/GuidanceDialog';
import './tips/TipsService';
import './quotes/QuotesService';

angular.module('pipGuidance', [
    'pipGuidance.Rest',
    'pipTips.Service',
    'pipIntroGuidance.Service',
    'pipGuidance.Dialog',
    'pipQuotes.Service',
    'pipReleaseIntroDialog'
]);

export * from './data';
export * from './tips/ITipsService';
export * from './quotes/IQuotesService';