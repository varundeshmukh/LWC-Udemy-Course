import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
export default class GetListUiDemo extends LightningElement {
    contacts=[];
    pageToken=null;
    nextPageToken=null;
    prevPageToken=null;
    currentPageToken=null;
    @wire(getListUi, {
        objectApiName: CONTACT_OBJECT,
        listViewApiName: 'AllContacts',
        pageSize:10,
        pageToken:'$pageToken'
    })
    listViewHandler({data, error}){
        if(data){
            console.log(data);
            this.currentPageToken = data.records.currentPageToken;
            this.contacts = data.records.records;
            this.nextPageToken = data.records.nextPageToken;
            this.prevPageToken = data.records.previousPageToken;
        }
        if(error){
            console.error(error);
        }
    };

    handlePrevPage(){
        this.pageToken = this.prevPageToken;
    }

    handleNextPage(){
        this.pageToken = this.nextPageToken;
    }
}