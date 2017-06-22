import React from "react";
import ReactDom from "react-dom";


// Define react component here
//This will generate a <div> with "hello world" text

class HelloWorld extends React.Component {
    render() {
        var title = "JS example of Hello World";
        return (<div>Hello World From React. {title}</div>);
    }
}

// var x = <div> Hello World </div>        //HTML componect being instatiated

var elem = <HelloWorld/>;                  // React element i.e. instantiation of React Component using instantiaton of JSX style
var node = document.getElementById("app");

//Render this React Component into DOM

ReactDom.render(elem, node);