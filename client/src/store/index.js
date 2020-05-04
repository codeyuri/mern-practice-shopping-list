import { createStore, applyMiddleware, compose } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './rootReducer';

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : null

const store = createStore(
  rootReducer,
  compose(applyMiddleware(Thunk), devTools)
)

export default store;