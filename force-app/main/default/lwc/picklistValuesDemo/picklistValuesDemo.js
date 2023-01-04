import { LightningElement, wire } from 'lwc';
import {getPicklistValues, getObjectInfo} from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJ from '@salesforce/schema/Account';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';

export default class PicklistValuesDemo extends LightningElement {
    defaultRecordType;
    industryPicklistValues;
    picklistSelectedValue;
    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJ})
    defaultRecTypeHandler({data, error}){
        if(data){
            this.defaultRecordType = data.defaultRecordTypeId;
            console.log('VSD defaultRecordType :: ' + this.defaultRecordType);
        }
        if(error){
            console.error(error);
        }
    }

    @wire(getPicklistValues, {recordTypeId:'$defaultRecordType', fieldApiName:ACCOUNT_INDUSTRY})
    getIndustryPicklistValues({data, error}){
        if(data){
            this.industryPicklistValues = this.transformValues(data);
        }
        if(error){
            console.error(error);
        }
    }

    industryChangeHandler(event){
        this.picklistSelectedValue = event.target.value;
    }

    transformValues(data){
        return data.values.map(item => ({label:item.label, value:item.value}))
    }

    
}