import React from "react";
import { addCity } from "../actions/savedCitiesActions";
import { connect } from 'react-redux';
import Saved from "./Saved";
import "../styles/SavedHeader.css"

class SavedHeader extends React.Component {
    cityAdd = event => {
        event.preventDefault();
        this.props.addCity(event.target[0].value, this.props.favoriteCities);
        this.formRef.reset();
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 ">
                        <h2 className="savedHeaderTitle">
                            Избранное
                        </h2>
                    </div>
                    <div className="col-lg-6 ">
                        <form className="addCityForm mt-1 mt-lg-4" onSubmit={this.cityAdd} ref={(ref) => this.formRef = ref}>
                            <div className="row">
                                    <input className="addCityForm__inputFld col-6 ml-3" id="inputfld" placeholder="Город"></input>
                                    <input className="button addCityForm__addButton ml-auto col-4 mr-3" id="" type='submit' value= "Добавить"></input>
                            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SavedHeader)