import  React, {Component} from 'react';

class WeatherSelecter extends Component {
    constructor (props) {
        super(props)
    }

    render () {
        const {locationGroup,locationUpdate} = this.props;
        console.log(locationGroup)
        return (
            <div className="weather-selecter">
                <select onChange={(e)=>{locationUpdate(e.target.value)}}>
                    {
                        this.props.locationGroup.map((locationObj) => {
                          return <option key={locationObj.id} value={locationObj.name}>{locationObj.name}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}

export default WeatherSelecter