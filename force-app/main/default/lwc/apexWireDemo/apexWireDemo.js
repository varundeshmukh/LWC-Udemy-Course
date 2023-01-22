import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';

export default class ApexWireDemo extends LightningElement {
    accountList;
    /*@wire(getAccountList, {nameStr : 'Test%'})
    getAccounts({data, error}){
        if(data){
            console.log(data);
            this.AccountList = data.map(item => {
                let accountUrl = `/${item.Id}`;
                let industryLet = !item.Industry ? '--NA--' : item.Industry;
                let typeLet = !item.Type ? '--NA--' : item.Type;
                return {...item, accountUrl, industryLet, typeLet};
            });
        }
        if(error){
            console.error(error);
        }
    };
    */

    connectedCallback(){
        getAccountList({nameStr:'%VSD%'}).then(result => {
            this.accountList = result.map(item => {
                let accountUrl = `/${item.Id}`;
                let industryLet = !item.Industry ? '--N1A--' : item.Industry;
                let typeLet = !item.Type ? '--N1A--' : item.Type;
                return {...item, accountUrl, industryLet, typeLet};
            });
        }).catch(error => {
            console.error(error);
        })
    }

    get accountExists(){
        if(this.accountList){
            return true;
        }
        return false;
    }
}