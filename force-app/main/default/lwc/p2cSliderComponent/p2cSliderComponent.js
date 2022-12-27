import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 20;

    sliderHandler(event){
        this.val = event.target.value;
    }

    @api resetSlider(resetVal){
        this.val = resetVal;
    }
}