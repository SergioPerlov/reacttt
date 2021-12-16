import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "fb100904c6d8c743e0357553ab998b41";

class App extends React.Component{

state = {
  temp: undefined,
  city: undefined,
  country: undefined,
  sunrise: undefined,
  sunset: undefined,
  pressure: undefined,
  error: undefined
}


  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
  
    
    
      if(city){
         const api_url = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await api_url.json();
      console.log(data);

       let sunriseInSec = data.sys.sunrise
        let date1 = new Date(sunriseInSec * 1000)
        let timeSunrise = date1.toLocaleTimeString()

      let sunsetInSec = data.sys.sunset
        let date = new Date(sunsetInSec * 1000)
        let timeSunset = date.toLocaleTimeString()
    
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: timeSunrise,
        sunset: timeSunset,
        pressure: data.main.pressure,
        error: undefined
      });
    }

    else{
      this.setState({
        temp: undefined,
  city: undefined,
  country: undefined,
  sunrise: undefined,
  sunset: undefined,
  pressure: undefined,
  error: "Введите название города!!!"
      });
    }


}


  render(){
    return(
<div>
    <Info />
    <Form weatherMethod={this.gettingWeather} />
    <Weather 
    temp={this.state.temp}
    city={this.state.city}
    country={this.state.country}
    sunrise={this.state.sunrise}
    sunset={this.state.sunset}
    error={this.state.error}
    pressure={this.state.pressure}
    />
</div>
      )
  }
}

export default App;