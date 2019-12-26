import React from "react";

import { gettingWeather } from "../actions/localWeatherActions"
import { connect } from 'react-redux';

class Header extends React.Component {
    componentDidMount() {
        this.props.gettingWeather();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 id="title">
                            Погода здесь
                        </h2>
                    </div>
                    <div className="col-lg-4">
                        <button id="update-button" onClick={this.props.gettingWeather}>
                            Обновить
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

 Header.defaultProps = {
  
     weatherMethod: f => f
 };
const mapDispatchToProps = {
  gettingWeather: gettingWeather,
}

export default connect( '', mapDispatchToProps)(Header)