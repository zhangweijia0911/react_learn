import React,{Component} from 'react';
import {ADD_TODO,DEL_TODO} from '../actiontypes';
import {store} from '../store'

class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {list:store.getState().todo.list}
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
    //删除
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
                list:store.getState().todo.list
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

export default Todo;