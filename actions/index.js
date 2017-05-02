// Your implementation here.
// Hint: We need two actions!

import counterStore from '../stores/counterStore'

function increment(){
  counterStore.increment();
}

function decrement(){
  counterStore.decrement();
}

export default {
  increment,
  decrement
}
