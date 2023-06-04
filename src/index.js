
// This is the old way to get react module
        // var react = require("react");
        // var ReactDom = require("react-dom");

// import React from "react";
// import  ReactDom from "react-dom";

    // import React from "react";
    // import  ReactDom from "react-dom";
    // ReactDom.render(<h1>Hello World!</h1>, document.getElementById("root"));


    // import React from "react";
    // import  ReactDom from "react-dom";
    // ReactDom.render(
    //     <div>
    //         <h1>Hello World!</h1>
    //         <p>This is a paragraph</p>
    //     </div>, 
    //     document.getElementById("root")
    // );


   // ReactDom.render(<h1>Hello name!</h1>, document.getElementById("root"));
    
     // import React from "react";
    // import  ReactDom from "react-dom";
    // ReactDom.render(<h1>Hello {name}!</h1>, document.getElementById("root"));


    // import React from "react";
    // import  ReactDom from "react-dom";
    // const number = 19;
    // ReactDom.render(
    //     <div>
    //         <h1>Hello {name}!</h1>
    //         <p>My lucky number is {Math.random()}</p>
    //     </div>, 
    //     document.getElementById("root")
    // );

//-- we can't write the statements inside those curly braces we can add only expressions

    // import React from "react";
    // import  ReactDom from "react-dom";
    // ReactDom.render(<div>
    //     <h1> {
//             if (name == "Hemant") {
//                 return 19;
//             } else {
//                 return 0;
//             }
//         }
    //     </h1>
    // </div>)
 
    // import React from "react";
    // import  ReactDom from "react-dom";
    // ReactDom.render(
    //     <div>
    //         <h1 className="heading">Hello World!</h1>
    //         <p>My lucky number is {Math.floor(Math.random()*10)}</p>
    //     </div>, 
    //     document.getElementById("root"));
    // ReactDom.render(
    //     <div>
    //         <h1 className="heading">Hello World!</h1>
    //         <p>My lucky number is {Math.floor(Math.random()*10)}</p>
    //     </div>, 
    //     document.getElementById("live"));

    // import React from "react";
    // import  ReactDom from "react-dom";
    // ReactDom.render(<h1 style={{ color : "red",}}>Hello World!</h1>,
    //     document.getElementById("root")
    // );


    // import React from "react";
    // import  ReactDom from "react-dom";
    // function Heading(){
    //     return <h1>Hello world!</h1>;
    // }
    // ReactDom.render(
    //     <div>
    //         {/* <h1>Hello world!</h1> */}
    //         <Heading />
    //     </div>,
    //     document.getElementById("root")
    // );


    // import React from "react";
    // import  ReactDom from "react-dom";
    // import Heading from "./Heading";
    // import List from "./List";

    // ReactDom.render(
    //     <div>
    //         {/* <h1>Hello world!</h1> */}
    //         <Heading />
    //         <List />    
    //      </div>,
    //     document.getElementById("root")
    // );


    // import React from "react";
    // import  ReactDom from "react-dom";
    // import App from "./components/App";

    // ReactDom.render(<App />,document.getElementById("root"));


    // import React from "react";
    // import  ReactDOM  from "react-dom/client";
    // import Custom from "./components/Custom";

    // const root = ReactDOM.createRoot(document.getElementById('root'));

    // const on = {
    //     name: "Hemant",
    //     age: 20
    // }
    // root.render(
    //     <>
    //         <Custom name={on} />
    //     </>
    // );



    


    // This is React@18 syntax to render 
    // in react@18 ReactDom.render() is not supported
    // and import ReactDom from react-dom is also not supported it needs `react-dom/client`

    // import React from "react";
    // import  ReactDom from "react-dom/client";
    // import App from "./components/App";

    // const root = ReactDom.createRoot(document.getElementById('root'));
   
    // root.render(<div>
    //     <App />
    // </div>);