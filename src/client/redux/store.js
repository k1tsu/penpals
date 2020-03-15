import { createStore } from 'redux';
import reducer from './rootReducer';

const store = createStore(reducer);

console.log(store.getState());

export default store;
