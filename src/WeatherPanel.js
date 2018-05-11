import React, {Component} from 'react';
import propTypes from 'prop-types';
class WeatherPanel extends Component {
    constructor(props){
        super(props)

        this.state = {
            temperature : 'NA'
        }

        //this.getTemperature = this.getTemperature.bind(this)
        //不用bind,getTemperature方法就得用箭头函数  this的坑
    }

    getTemperature = ()=>{
        console.log(this)
        const mockTemperature = Math.random()*100;
        this.setState({
            temperature : mockTemperature
        })
    }

    render () {
        const {location} = this.props;
        return (
            <div className='weather-panel'>
                <div>{location}的温度是：{this.state.temperature}</div>
                <button onClick = {this.getTemperature}>获取</button>
            </div>
        )
    }
}

WeatherPanel.propTypes = {
    location:propTypes.string.isRequired
}
export default WeatherPanel;