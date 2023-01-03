import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import USER_NAME from '@salesforce/schema/User.Name';
import USER_EMAIL from '@salesforce/schema/User.Email';
const fields = [USER_NAME, USER_EMAIL];
export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    //005f2000008tIFBAA2

    /*@wire(adapter, adapterConfig)
    propertyOrFunction;*/

    userDetails;

    @wire(getRecord, {recordId: '$userId', fields})
    userDetailHandler({data, error}){
        if(data){
            this.userDetails = data.fields;
        }
        if(error){
            console.error(error);
        }
    };

    @wire(getRecord, {recordId: '$userId', fields})
    userDetailsProp;

    changeUserHandler(){
        if(this.userId == '005f2000009tMEUAA2'){
            this.userId = '005f2000008tIFBAA2';
        }
        else if(this.userId == '005f2000008tIFBAA2'){
            this.userId = '005f2000009tMEUAA2';
        }
    }
}