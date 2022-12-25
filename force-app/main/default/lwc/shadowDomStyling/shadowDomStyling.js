import { LightningElement } from 'lwc';

export default class ShadowDomStyling extends LightningElement {
    isLoaded = false;
    renderedCallback(){
        if(this.isLoaded) return;
        const styleElem = document.createElement('style');
        styleElem.innerText = `
        c-shadow-dom-styling .slds-button{
            background-color:red;
            color:white;
        }
        `;
        this.template.querySelector('lightning-button').appendChild(styleElem);
        this.rendered = true;
    }
}