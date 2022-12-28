import { LightningElement, api } from 'lwc';

export default class SetterMethodChild extends LightningElement {
    userDetail;

    @api 
    get detail(){
        return this.userDetail;
    }

    set detail(data){
        this.userDetail = {...data, age:39, "location" : "India"};
    }
}