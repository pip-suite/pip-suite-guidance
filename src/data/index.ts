import './Attachment';
import './Guide';
import './GuidePage';
import './GuideStatus';
import './GuideType';
import './MultiString';
import './PartyReference';
import './Quote';
import './QuoteStatus';
import './PageData';
import './Tip';
import './TipStatus';
import './TipDataService';
import './ITipDataService';
import './QuoteDataService';
import './IQuoteDataService';
import './GuideDataService';
import './IGuideDataService';

angular
    .module('pipGuidance.Data', [
        'pipTipData',
        'pipQuoteData',
        'pipGuideData'
    ]);

export * from './IGuideDataService';
export * from './IQuoteDataService';
export * from './ITipDataService';
export * from './Attachment';
export * from './Guide';
export * from './GuidePage';
export * from './GuideStatus';
export * from './GuideType';
export * from './MultiString';
export * from './PartyReference';
export * from './Quote';
export * from './QuoteStatus';
export * from './PageData';
export * from './Tip';
export * from './TipStatus';