import { LightningElement } from 'lwc';
import signupTemplate from './signupTemplate.html';
import signinTemplate from './signinTemplate.html';
import rendorMethod from './rendorMethod.html';

export default class RendorMethod extends LightningElement {
    templateType = 'default';
    render(){
        if(this.templateType === 'default')
            return rendorMethod;
        else if(this.templateType === 'signin')
            return signinTemplate;
        else if(this.templateType === 'signup')
            return signupTemplate;
    }

    signInHandler(){
        this.templateType = 'signin';
    }

    signUpHandler(){
        this.templateType = 'signup';
    }

    defaultInHandler(){
        this.templateType = 'default';
    }
}