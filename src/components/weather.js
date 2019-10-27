import React from "react";
import { ClipLoader } from 'react-spinners';



class Weather extends React.Component{
    
    
    render(){
        if (this.props.weatherInfo){
            var pic = "http://openweathermap.org/img/wn/" + this.props.weatherInfo.weather[0].icon + "@2x.png"
            console.log(pic);
        return(
                <div class="container">
                    <div class = "row">
                        <div class="col-lg-6">
                            <h2 id="cityname">
                                { this.props.weatherInfo.name }
                            </h2>
                            <img  id="pic" src = {pic}></img>
                        </div>
                        <div class="col-lg-6">
                            <div class='row' id="string">
                            <p>Температура</p>    
                            <div id= 'val'> { this.props.weatherInfo.main.temp } ºC</div>
                            </div>
                            <div class='row' id="string">
                            <p>Давление</p>    
                            <div id= 'val'> { this.props.weatherInfo.main.pressure } hPA</div>
                            </div>
                            <div class='row' id="string">
                            <p>Скорость ветра</p>    
                            <div id= 'val'> { this.props.weatherInfo.wind.speed } m/s</div>
                            </div>
                            <div class='row' id="string">
                            <p>Облачность</p>    
                            <div id= 'val'> { this.props.weatherInfo.clouds.all } %</div>
                            </div>
                        </div>
                    </div>
                </div>
        );
}else{
    return(
        <div class="container">
                    <div class = "row">
                        <div class="col-lg-12">
                        <h2 id="waiting">
                        Подождите, данные загружаются
                        </h2>
                        </div>
                        <div class="col-lg-12 ">
                            <div class="center-block">
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