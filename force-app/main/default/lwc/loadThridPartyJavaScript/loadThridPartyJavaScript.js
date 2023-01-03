import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment';
import FICO_LOGO from '@salesforce/resourceUrl/FicoLogoImg';
import {loadScript} from 'lightning/platformResourceLoader';

export default class LoadThridPartyJavaScript extends LightningElement {
    ficoLogoSrc = FICO_LOGO;
    currentDate = '';

    renderedCallback(){
        /*Promise.all([
            loadScript(this, MOMENT + '/moment/moment.min.js')
        ]).then(() => {
            this.setDataOnScreen();
        }).catch(error => {
            console.error(error);
        });*/

        loadScript(this, MOMENT + '/moment/moment.min.js').then(() => {
            this.setDataOnScreen();
        }).catch(error => {
            console.error(error);
        })
    }

    setDataOnScreen(){
        this.currentDate = moment().format('LLLL');
    }
}