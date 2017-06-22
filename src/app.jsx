import React from "react";
import ReactDOM from "react-dom";
import Thumbnail from "./components/thumbnail.jsx";
import MainBox from "./components/main-box.jsx";

import data from "./data.js";

// Have Access to an array called data
export default class App extends React.Component{

    constructor(props) {
        super(props);
        //Setting initial state
        this.state = {currentTitle: data[0].title, currentUrl: data[0].url};
        this.setCurrent = this.setCurrent.bind(this);
    }

    //Modifying state
    setCurrent(title, url) {
        // this.setState({currentTitle: title})         //partial state change is also allowed
        this.setState({currentTitle: title, currentUrl: url})
        console.log("Changed current state");
    }

    //Accessing state

    render(){
        var styleAlignItem = {textAlign: "center", padding:"20px"};
        var styleBGColor = {backgroundColor: "#ddd"};
        return (
        <div className="container">
            <div className="jumbotron row">
                <div className="col-md-4 col-md-offset-4" style={styleAlignItem}>
                    <MainBox title={this.state.currentTitle} url={this.state.currentUrl} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-8 col-md-offset-2" style={styleAlignItem}>

            { // Start of JS Expression for data.map
                data.map(function(object){
                        return (
                            <Thumbnail
                                title={object.title}
                                url={object.url}
                                key={object.title}              //assuming it is unique
                                setCurrentHandler={this.setCurrent}
                            />
                        );
                    }.bind(this)// End of function
                ) // End of Data.map
            }
                </div>
            </div>
        </div>
    );
    }
}

var app = <App/>; //Instantiation : Creates a RE from a RC
var node = document.getElementById("app");

ReactDOM.render(app, node);