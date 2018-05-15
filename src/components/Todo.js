import React,{Component} from 'react';
import {createStore} from 'redux';
const ADD_TODO = 'ADD_TODO';//这是action的类型
const DEL_TODO = 'DEL_TODO';//这是action的类型

let reducer = (state={list:[]},action)=>{
    if(action === undefined) return state;
    switch (action.type){
        case ADD_TODO:
            return {list:[...state.list,action.text]};
        case DEL_TODO:
            let list = state.list;
            list.splice(action.index,1);
            //我们的状态具有不变性，每次都要返回一个新的对象
            return {list:[...list]};
        default:
            return state;
    }
};
let store = createStore(reducer);

export default class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {list:store.getState().list}
    }
    handleKeyDown = (event)=>{
        if(event.keyCode === 13 && event.target.value.length>0){
            store.dispatch({
                type:ADD_TODO,
                text:event.target.value
            })
            event.target.value = '';
        }
    };
    deleteTodo(index){
        store.dispatch({
            type:DEL_TODO,
            index
        })
    }
    componentWillMount(){
        //订阅
        this.unSubscribe = store.subscribe(()=>{
            this.setState({
                list:store.getState().list
            })
        })
    }
    componentWillUnmount(){
        this.unSubscribe();
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.list.map((todo,index)=>{
                            return (
                                <li key={index}>{todo}<button onClick={()=>this.deleteTodo(index)}>-</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}