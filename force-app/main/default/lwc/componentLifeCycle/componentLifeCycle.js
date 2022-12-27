import { LightningElement } from 'lwc';

export default class ComponentLifeCycle extends LightningElement {
    constructor(){
        super();
        console.log('This is PARENT Constructor')
    }

    connectedCallback(){
        console.log('This is PARENT ConnectedCallBack')
    }

    renderedCallback(){
        console.log('This is PARENT RenderedCallBack')
    }

    disconnectedCallback(){
        console.log('This is PARENT disconnectedCallback')
    }

    showChild = false;
    
    showChildHandler(){
        this.showChild = true;
    }

    errorCallback(error, stack){
        console.log('This is PARENT errorCallback')
        console.log(error.message)
        console.log(stack)
    }

    hideChildHandler(){
        this.showChild = false;
    }
}