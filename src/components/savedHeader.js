import React from "react";
import ReactDOM from "react-dom";
import { ClipLoader } from 'react-spinners';
import { addCity } from "../actions/savedCitiesActions"
import { connect } from 'react-redux';
import Saved from "./saved"
class savedHeader extends React.Component {
    cityAdd = event => {
        event.preventDefault();
        console.log(this.props.favoriteCities);
        this.props.addCity(event.target[0].value, this.props.favoriteCities);
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 id="title">
                            Избранное
                        </h2>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={this.cityAdd}>
                            <input id="inputfld" placeholder="Город"></input>
                            <input id="update-button" type='submit' value= "Добавить в избранное"></input>
                        </form>
                    </div>
                </div>
                <div className="row">
                {this.props.favoriteCities.map(city => (
                    <Saved
                        key={city.name}
                        cityName={city.name}
                    />
                ))}
                </div>
            </div>
        );
    }
    
}
const mapStateToProps = (state) =>{
    return {
        favoriteCities: state.cities
    }
}
const mapDispatchToProps = {
    addCity: addCity,
};

export default connect(mapStateToProps, mapDispatchToProps)(savedHeader)