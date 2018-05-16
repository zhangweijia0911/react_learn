import {createStore} from 'redux';
import counter from './reducers/counter';
import todo from './reducers/todo';
/*
* {count:{number:0},todo:{list:[]}}
* */
let combineReducers = (reducers)=>
    (state={},action)=>{
        let newState = {};
        for(var key in reducers){
            newState[key] = reducers[key](state[key],action)
        }
        return newState;
    };
let reducer = combineReducers({
    counter,
    todo
});
let store  = createStore(reducer);

export {store};