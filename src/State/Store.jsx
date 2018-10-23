import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducer from './Reducer';
import thunk from 'redux-thunk';

//创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
var store = createStore(
    combineReducers(reducer),
    // applyMiddleware(thunk)
    //  redux Devtool
    compose(applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

export default store;