import { LightningElement } from 'lwc';

export default class ComponentLifeCycleChild extends LightningElement {
    constructor(){
        super();
        console.log('This is CHILD Constructor')
    }

    connectedCallback(){
        console.log('This is CHILD ConnectedCallBack');
        throw new Error('Child Component LOAD failed');
    }

    renderedCallback(){
        console.log('This is CHILD RenderedCallBack')
    }

    disconnectedCallback(){
        console.log('This is CHILD disconnectedCallback')
    }
}