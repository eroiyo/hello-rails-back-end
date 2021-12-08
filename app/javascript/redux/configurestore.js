import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import salute from './salute';

const reducer = combineReducers({
  salute
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
