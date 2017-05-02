import Store from '../stores/Store';

class CounterStore extends Store {
  
  constructor() {
    super()
    this.state = 0;
  }

  increment(){
    const newState = this.getState() +1;
    this.setState(newState)
  }

  decrement () {
    const newState = this.getState() - 1;
    this.setState(newState);
  }

}

const counterStore = new CounterStore();

export default counterStore;
