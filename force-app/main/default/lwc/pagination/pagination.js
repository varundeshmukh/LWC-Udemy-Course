import { LightningElement, api } from 'lwc';

export default class Pagination extends LightningElement {
    recordsReceived;
    recordsDisplayed = 5;
    visibleRecords;
    totalPage=0;

    
    @api 
    set records(data){
        if(data){
            console.log('VSD');
            console.log(data);
            this.recordsReceived = data;
            this.visibleRecords = data.slice(0, this.recordsDisplayed);
            this.totalPage = Math.ceil(data.length/this.recordsDisplayed);
            this.updateRecords();
        }
    }
    get records(){
        return this.visibleRecords;
    }
    
    previousHandler(){

    }

    nextHandler(){

    }

    updateRecords(){
        this.dispatchEvent(new CustomEvent('update', {
            detail: {
                records:this.visibleRecords
            }
        }));
    }
}