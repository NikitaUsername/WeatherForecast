import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import Cities from "../reducers/store"

var store = createStore(Cities);

class Saved extends React.Component{
    //componentDidMount() {
      //  this.props.getWeather(this.props.children);
  // }
    render(){
        return(
            <div className="container">
                <div className = "row">
                    <div className="col-lg-4">
                        <h2 id="cityname">
                            { this.props.children }
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <div className ='row' id="">
                            <p>Погода</p>    
                            <div id= 'minival'>{ this.props.weatherByNameInfo }</div>
                        </div>
                        <div className ='row' id="">
                            <p>Давление</p>    
                            <div id= 'minival'> </div>
                        </div>
                        <div className ='row' id="">
                            <p>Скорость ветра</p>    
                            <div id= 'minival'> </div>
                        </div>
                        <div className='row' id="">
                            <p>Облачность</p>    
                            <div id= 'minival'> </div>
                        </div>
                    </div>
                    <div className="col-lg-2" >
                        <button className="close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
            </div>
        </div>    
        );
    }
}
export default Saved;