import { MultiString } from './MultiString';
import { PartyReference } from './PartyReference';
import { Attachment } from './Attachment';

export class Tip {
    public id: string;
    public topics: string[];

    /* Automatically managed fields */
    public creator: PartyReference;
    public create_time: Date;

    /* Content */
    public title?: MultiString;
    public content?: MultiString;
    public more_url?: string;
    public pics?: Attachment[];
    public docs?: Attachment[];

    /* Search */
    public tags?: string[];
    public all_tags?: string[];

    /* Status */
    public status?: string;

    /* Custom fields */
    public custom_hdr?: any;
    public custom_dat?: any;
}