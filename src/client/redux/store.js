import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';
import { verifyAuth } from './actions/authActions';

const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(verifyAuth());

export default store;
