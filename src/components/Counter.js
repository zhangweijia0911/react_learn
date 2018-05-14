import React,{Component} from 'react';
import {createStore} from 'redux';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
let increase = (amount)=>{
    {{type:INCREASE,amount}}
}
let decrease = (amount)=>{
    {{type:DECREASE,amount}}
}

let reducer = (state = {number:0},action)=>{
    if(action === undefined) return state;
    switch (action.type){
        case INCREASE:
            return {number:state.number + action.amount};
        case DECREASE:
            return {number:state.number - action.amount};
        default:
            return state;
    }
}
let store = createStore(reducer);
class Counter extends Component {
    constructor(){
        super();
        this.state = {number:store.getState().number}
    }
    componentWillMount(){
        //订阅
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState().number
            })
        })
    }
    componentWillUnmount(){
        this.unsubscribe()
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>store.dispatch({type:INCREASE,amount:2})}>+</button>
                <button onClick={()=>store.dispatch({type:DECREASE,amount:2})}>-</button>
            </div>
        )
    }
}

export default Counter;