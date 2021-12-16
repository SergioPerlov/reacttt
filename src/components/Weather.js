
import React from "react";

class Weather extends React.Component{

    render(){
        return(
            <div>
            { this.props.sunrise && 
               <div>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Город и страна: {this.props.city} {this.props.country}</h2>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Температура= {this.props.temp}</h2>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Рассвет: {this.props.sunrise}</h2>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Закат: {this.props.sunset}</h2>
                <h2 class="text-white-50 mx-auto mt-2 mb-5">Давление: {this.props.pressure}</h2>
                </div>
            }
               
                <p>{ this.props.error}</p>
            </div>
        );
    }
}

export default Weather;