import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    percentageValue = 10;

    percentageHandler(event){
        this.percentageValue = event.target.value;
    }

    resetChildSlider(){
        this.template.querySelector('c-p2c-slider-component').resetSlider(80);
    }
}