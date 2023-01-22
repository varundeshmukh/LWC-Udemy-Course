import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/dataController.getContactList';

export default class PaginationDemo extends LightningElement {
    receivedData;
    displayedData;

    @wire(getContactList)
    getContacts({data, error}){
        if(data){
            console.log(data);
            this.receivedData = data;
        }
        if(error){
            console.error(error);
        }
    }

    get contactsExists(){
        if(this.receivedData)
            return true;
        return false;
    }

    updateContactHandler(event){
        console.log(event.detail.records);
        this.displayedData = event.detail.records;

    }
}