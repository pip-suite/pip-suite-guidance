import { MultiString } from './MultiString';
import { QuoteStatus } from './QuoteStatus';

export class Quote {
    public id: string;
    public text: MultiString;
    public author: MultiString;
    public status: string;
    public tags: string[];
    public all_tags: string[];
}
