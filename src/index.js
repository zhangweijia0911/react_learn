import React,{Component} from 'react';
import ReactDOM,{render} from 'react-dom';

class Text extends Component {
    handleClick(word,e){
        console.log(this,word);
    }
    render(){
        return (
            <div>
                <h1 onClick={this.handleClick.bind(this,'hello')}>yonyoucloud</h1>
            </div>
        )
    }
}


ReactDOM.render(<Text/>,window.app);