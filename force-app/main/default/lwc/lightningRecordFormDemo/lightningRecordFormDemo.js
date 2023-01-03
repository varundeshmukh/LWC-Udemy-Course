import { LightningElement, api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_F from '@salesforce/schema/Account.Name';
import PHONE_F from '@salesforce/schema/Account.Phone';
import ANNUAL_REVENUE_F from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_F from '@salesforce/schema/Account.Industry';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LightningRecordFormDemo extends LightningElement {
    objectName = ACCOUNT_OBJECT;
    fieldList = [NAME_F, PHONE_F, INDUSTRY_F, ANNUAL_REVENUE_F];
    @api recordId;
    @api objectApiName;

    successHandler(event){
        const successToast = new ShowToastEvent({
            title: "Success",
            message: "Account Created Successfully : " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(successToast);
    }
}