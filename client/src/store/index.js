import { createStore, applyMiddleware, compose } from 'redux';
// import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// const store = createStore(
//     rootReducer,
//     applyMiddleware(Thunk)
// )

const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devTools)
)

// const store = createStore(
//     rootReducer,
//     compose( applyMiddleware(Thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() )
// )

export default store;