import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    myProp: string;

    connectedCallback(): void {
        this.myProp = 'hello';
    }
}
