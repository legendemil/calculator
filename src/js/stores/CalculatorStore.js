import { EventEmitter } from "events";
import  dispatcher  from '../dispatcher';

class CalculatorStore extends EventEmitter {
	constructor() {
		super();
		this.output = "12x6";
	}



	getOutput(){
		return this.output;
	}

	updateOutput(val){
		const output = this.output + val;
		this.output = output;
		this.emit('change');
	}

	handleActions(action) {
		switch(action.type) {
			case 'UPDATE_OUTPUT': {
				this.updateOutput(action.value);
				break;
			}
		}
	}
}

const calculatorStore = new CalculatorStore;


dispatcher.register(calculatorStore.handleActions.bind(calculatorStore));


export default calculatorStore;