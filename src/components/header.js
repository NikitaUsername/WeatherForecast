import React from "react";

class Header extends React.Component{
    
    render(){
        return(
            <div className="container">
                <div className = "row">
                    <div className="col-lg-4">
                        <h2 id="title">
                            Погода здесь
                        </h2>
                    </div>
                    <div className="col-lg-4">
                        <button id="update-button" onClick={ this.props.weatherMethod }>
                            Обновить
                        </button>
                    </div>
                </div>
            </div>    
        );
    }
}

export default Header;