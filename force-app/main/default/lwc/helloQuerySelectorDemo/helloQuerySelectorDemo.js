import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    names = ['Varun', 'Gauri', 'Ridhima', 'Meera'];
    fetchDetailsHandler(){
        console.log('VSD Details Button Clicked');
        const elem = this.template.querySelector('h1');
        elem.style.border = '2px solid red';
        console.log('VSD Heading Text :: ' + elem.innerText);
        const elems = this.template.querySelectorAll('.vsd-class');
        Array.from(elems).forEach(item => {
            console.log(item.innerText);
        })
    }
}