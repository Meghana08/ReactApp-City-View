import React from "react";

export default class Thumbnail extends React.Component{
    constructor(props) {
        super(props);
        this.onButtonClickEventHandler = this.onButtonClickEventHandler.bind(this);
    }

    onButtonClickEventHandler(event) {
        this.props.setCurrentHandler(this.props.title, this.props.url)
        console.log(this);
        console.log(this.props.title);
    }

    // All the props are stored in this.props
    // Expect a variable called title to be passed to this object
    // That will be accessible by this.props.title
    render(){
        var breathe = {marginLeft: "20px", marginRight: "20px"};
        return (
            <span style={breathe}>
                <button
                    onClick={this.onButtonClickEventHandler}
                    className="btn btn-default btn-lg">
                        {this.props.title}
                </button>
            </span>
        );

    }

}