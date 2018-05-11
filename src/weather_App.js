import React,{Component} from 'react';
import WeatherPanel from './WeatherPanel';
import WeatherSelecter from './WeatherSelecter';
import locationGroup from './WeatherLocationGroup';

class Weather_Apps extends Component {
    locationUpdate(locationName){
        this.setState({
            selectedLocation:locationName
        })
    }
    
    render () {
        return (
            <div className="weather-app">
                <WeatherSelecter locationGroup={locationGroup} locationUpdate={this.locationUpdate}></WeatherSelecter>
                <WeatherPanel location='123'></WeatherPanel>
            </div>
        )
    };
}
export default Weather_Apps