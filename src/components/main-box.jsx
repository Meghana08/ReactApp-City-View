import React from "react";

export default class MainBox extends React.Component{
    // this would expect two props
    // title, url
    // accessible at this.props.(X)
    render(){
        return (
            <div>
                <img className="img-rounded" width="100%" height="100%" src={this.props.url} alt={this.props.title}/>
            </div>
        );
    }

}