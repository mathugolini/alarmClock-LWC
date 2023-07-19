import { LightningElement, api } from 'lwc';

export default class ClockDropDown extends LightningElement {
    @api label =''
    @api options=[]
    @api uniqueId =''
}