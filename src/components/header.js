import React from "react";

class Header extends React.Component{
    componentDidMount() {
         this.props.weatherMethod();
    }
    render(){
        return(
            
                <div class="container">
                    <div class = "row">
                        <div class="col-lg-4">
                            <h2 id="title">
                                Погода здесь
                            </h2>
                        </div>
                        <div class="col-lg-4">
                            <button id="update-button" onClick={ this.props.weatherMethod }>
                                Обновить геолокацию
                            </button>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default Header;