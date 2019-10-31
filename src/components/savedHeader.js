import React from "react";
import { ClipLoader } from 'react-spinners';

class savedHeader extends React.Component{
    
    render(){
        return(
            <div className="container">
                <div className = "row">
                    <div className="col-lg-4">
                        <h2 id="title">
                            Избранное
                        </h2>
                    </div>
                    <div class="col-lg-6">
                        <form>
                        <input id="inputfld" placeholder="Город"></input>
                        <button id="update-button">
                            Добавить в избранное
                        </button>
                        </form>
                    </div>
                </div>
            </div>    
        );
    }
}

export default savedHeader;