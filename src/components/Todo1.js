import React,{Component} from 'react';
class Todo extends Component {
    constructor(props){
        super(props);
        this.state = {list:[]}
    }
    handleKeyDown = (event)=>{
        if(event.keyCode == 13 && event.target.value.length>0){
            let list = this.state.list;
            list.push(event.target.value);
            this.setState({list});
            event.target.value = '';
        }
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.list.map((todo,index)=>(<li>{todo}</li>))
                    }
                </ul>
            </div>
        )
    }
}
export default Todo;