import React from "react";
import { ClipLoader } from 'react-spinners';

class Weather extends React.Component{
    
    
    render(){
        if (this.props.weatherInfo){
            var pic = "http://openweathermap.org/img/wn/" + this.props.weatherInfo.weather[0].icon + "@2x.png"
        return(
                <div className = "container">
                    <div className = "row">
                        <div className = "col-lg-6">
                            <h2 id="cityname">
                                { this.props.weatherInfo.name }
                            </h2>
                            <div className="row">
                            <img  id="pic" src = {pic}></img>
                            <p id="temp"> { this.props.weatherInfo.main.temp } ºC </p> 
                            </div>
                            
                        </div>
                        <div className = "col-lg-6">
                            <div className ='row' id="string">
                            <p>Погода</p>    
                            <div id= 'val'> { this.props.weatherInfo.weather[0].description } </div>
                            </div>
                            <div className ='row' id="string">
                            <p>Давление</p>    
                            <div id= 'val'> { this.props.weatherInfo.main.pressure } hPA</div>
                            </div>
                            <div className ='row' id="string">
                            <p>Скорость ветра</p>    
                            <div id= 'val'> { this.props.weatherInfo.wind.speed } m/s</div>
                            </div>
                            <div className='row' id="string">
                            <p>Облачность</p>    
                            <div id= 'val'> { this.props.weatherInfo.clouds.all } %</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
}else{
    return(
        <div className="container">
                    <div className = "row">
                        <div className="col-lg-12">
                        <h2 id="waiting">
                        Подождите, данные загружаются
                        </h2>
                        </div>
                        <div className ="col-lg-12 ">
                            <div className ="center-block">
                                <ClipLoader color='#d3d3d3'/>
                            </div>
                        </div>
                    </div>
                </div>
    );
    }

    }
}

export default Weather;