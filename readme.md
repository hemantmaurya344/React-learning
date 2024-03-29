            React
-- React is Open source Frontend Javascript library

-- This is the old way to get react module
    var react = require("react");
    var ReactDom = require("react-dom");


    
-- While we are declaring JS in Html file we use script tag for this and we provide type 
   of text/JAVASCRIPT but now in react we need to provide text/JSX to declare that it is 
   a JSX file.
-- this is new ES6 way to get by importing the module
        import React from "react";
        import  ReactDom from "react-dom";

-- render(what to show, where to show)
-- Javascript uses Babel as its compiler
    - import React from "react";
    - import  ReactDom from "react-dom";
    - ReactDom.render(<h1>Hello World!</h1>, document.getElementById("root"));


-- When we try to use more than one HTML element in the render method then you page
    - will get crashed beacuse render takes only one HTML element as an argument
    - we can achieve this by putting them into a div tag

    - import React from "react";
    - import  ReactDom from "react-dom";
    - ReactDom.render(
         <div>
             <h1>Hello World!</h1>
            <p>This is a paragraph</p>
         </div>, 
         document.getElementById("root")
     );

-- JSX allows us to use HTML inside the Js but its further allows us to use Js backinside 
   to the HtMl.
     
     const name = "Hemant";

-- here we have a variable and we want to display over the web in render() we can't do it 
   because if we add the variable inside html element it interprets as a string.

   - ReactDom.render(<h1>Hello name!</h1>, document.getElementById("root"));

-- we do use jsx from the react module to inject the js code inside the Html while we are
    - inside the Javascript file by wrapping the js into curly braces. 
    
    - import React from "react";
    - import  ReactDom from "react-dom";
    - ReactDom.render(<h1>Hello {name}!</h1>, document.getElementById("root"));

    import React from "react";
    import  ReactDom from "react-dom";
    const number = 19;
    ReactDom.render(
        <div>
             <h1>Hello {name}!</h1>
             <p>My lucky number is {Math.random()}</p>
        </div>, 
        document.getElementById("root")
    );

-- we can't write the statements inside those curly braces we can add only expressions

    - import React from "react";
    - import  ReactDom from "react-dom";
    - ReactDom.render(<div>
            <h1> {
                if (name == "Hemant") {
                    return 19;
                } else {
                    return 0;
                }  
            }  
            </h1>
        </div>)
 
-- Template literals
    - injecting string to the js (string interpolation)
    - syntax 
         render(<h1>Hello {`${var1} ${var2}`}</h1>)
    - whatever inside the backticks `` is converted into a one string
-- better way to do that is using {var1 + " "+ var2} like in JAVA

-- Now We learn Styling the React Element and how to use the attributes in the JSX
    - In JS we know there is className property for classes while in html we have class.
    - We can style the the element by just putting className attribute and specipy the 
      class.
    - which we style in css just like a normal styling.
    - Js uses camelcase format for the attributes when we want to use any html attribute 
    - we need to use them in camelcase.
    - we can style the element in css as normally.

    - import React from "react";
     import  ReactDom from "react-dom";
     ReactDom.render(
        <div>
             <h1 className="heading">Hello World!</h1>
             <p>My lucky number is {Math.floor(Math.random()*10)}</p>
        </div>, 
        document.getElementById("root")
    );

    ReactDom.render(
         <div>
             <h1 className="heading">Hello World!</h1>
             <p>My lucky number is {Math.floor(Math.random()*10)}</p>
        </div>, 
        document.getElementById("live")
    );

-- In HtML if img tag doesn't have any childern then it does not need closing tag. 
        - ex: <img src="www.google.com">
              <img src="www.google.com" /> 
        - they both work fine in html but in JSX it is not fine it won't work 
        - In JSX it is mandatory to have closing tag 
        - <img src="www.google.com"> if it's having childerns </img>
         <img src="www.google.com" /> it it do not have childern


-- InLine CSS
        - We can do inline styling in the html we can do the same here in jsx also.
        - when we appply inline css the compiler immediately gives us error.
        - but in jsx instead of providing the style into string format it wants it in JS 
          object format.
        - JS Object are like this { key: value } 
        - here the value should be in string format and for multiple properties. 
        - we need to use comma , 
        - ex: {color : "red", font-size : "2em" }
        - but for using JS code we need to put { } and as we know after that we put our 
        - object inside it.
        - ex: render(<h1 style = { {color : "red", fontSize : "2em" } }> hello World</h1>, document.getElementById('root'))

    - import React from "react";
      import  ReactDom from "react-dom";
      ReactDom.render(<h1 style={{ color : "red",}}>Hello World!</h1>,
        document.getElementById("root")
     );

        - inline css is helpful here for just fast styling 
        - create object to the styles and assign it into variable and pass the variable 
          into JSX.


    - Practice 
        Show a single h1 says good morning -> midnight and 12 pm
        good afternoon -> btw 12pm to 6pm
        good evening -> 6pm to midmight
        styles morning - red, afternoon - green, night- blue
    
    - Soln 
    
     import React from "react";
     import  ReactDom from "react-dom";
     const date = new Date();
     const currTime = date.getHours();

     let greeting;
     const customStyle = {
         color : ""
     }
     if(currTime < 12){
         greeting = "Good Morning"
         customStyle.color = "red"
     }else if(currTime < 18 ){
         greeting = "Good Aternoon"
         customStyle.color = "Green"
     }else{
         greeting = "Good Night"
         customStyle.color = "Blue"
     }

     ReactDom.render(<h1 style={customStyle}>{greeting}</h1>, document.getElementById("root"));

-- Components
    - Components allows us to split large file/ a compelex web structure into smaller 
      components and we get the benefit of reusing each of these components when we need 
      the same functionality for creating the components steps to follow

    - Create a function for which you need to split code into a component/
    - for creating function react naming convention says that every word need to have 
      first word capital.
        - the funtion need to return the code which you want to have component
        - ex:  Function Heading(){
                  return <h1>Hello world</h1>;
               }
        -  Now we can use the created component into our JSX code where we want as an
           HTML element.

    - import React from "react";
      import  ReactDom from "react-dom";
      function Heading(){
        return <h1>Hello world!</h1>;
      }
      ReactDom.render(
         <div>
            {/* <h1>Hello world!</h1> */}
             <Heading />
         </div>,
         document.getElementById("root")
      );

    the capital letter allow to distingush between custom component vs HTML element if 
    you don't have any childern of your created component then as react convention it 
    need to be self closing


-- Now till now we do everything inside index.js that's looks too messy We use 

    - ES6 feature where we import our component from a seperate file like our react 
      module.
    - As per convention we can leave our index.js file as JAVASCRIPT file with some of 
      react code and use the file extension .jsx for new created components files which 
      will be inside of src folder.
    - Everytime we create any new Component we need to follow these steps and add react 
      import inside it
    - and At the end of file it need to export the component by defalut along with 
      component name without parenthesis when make return immediatly to the importing 
      file.
    - We need to import it into file where we are using that component with location of 
      component.
    - file extension is optional in ES6 version for importing file

    - 1. Create new file <file_name>.jsx
    - 2. import react module
    - 3. create component there
    - 4. export it by using export keyword along with defalut keyword along with component name
        without parenthesis
    - 5. import the component where we need to use

    - import React from "react";
      import  ReactDom from "react-dom";
      import Heading from "./Heading";
      import List from "./List";

     ReactDom.render(
         <div>
             {/* <h1>Hello world!</h1> */}
             <Heading />
             <List />    
          </div>,
         document.getElementById("root")
     );


    - normally we don't see HTML element in index.js of lot of react apps instead of 
      that they have custom component called app (<app />).
    - Instead of all the importing module inside index.js we have custom file called 
      App.jsx and all the work happen there same as we create our component we 
      create App.jsx.
    - For more see App.jsx

    - import React from "react";
      import  ReactDom from "react-dom";
      import App from "./components/App";
      
      ReactDom.render(<App />,document.getElementById("root"));


    - As the app grow there are lot of components going to show so we need to manage them by putting
    - them into folder called components and they can further classfy into sub folders
    - as loginScreen component, register Compoent, etc.

 
-- Import , Export and Modules
    - We learned how to create component and export the components 
    - when you are exporting the component it is not mandatory that our file consist of 
      only one component we can have multiple components on our file.
    - so we can export the defalut component using `export default <component_name>;`
    - there can be only one default as per file.
    - But what about other components they also need to be used somewehere!
    - we can do export our all non default components  with the curly braces {}
    - ex: export {<component_1>,<component_2>};
    - while importing them specify the names inside curly braces 
    - the names matter here we need to put same name as they were exported name.
    - order of importing is not mandatory


-- props
    -  They are also called Properties
    -  React can have custom components which we can define with attributes .
    -  this functionalites are called as properties/props.
    -  we pass the `value` on cpmponents when that component gets created it will have 
       property .
    -  Here we pass custom argument named `props` to component function.
    -  we can use the props, React make sure that props are available when the function 
       starts rendering.
    -  This prop is object in which key and value with them which we can use inside the 
    -  components by just calling the object property by jsx expression.
    -  we can pass any expression including objects as value also .
    - Example down below file used: Custom.jsx, index.js
    
      import React from "react";
      import  ReactDOM  from "react-dom/client";
      import Custom from "./components/Custom";

      const root = ReactDOM.createRoot(document.getElementById('root'));

      const on = {
          name: "Hemant",
          age: 20
      }
      root.render(
          <>
              <Custom name={on} />
          </>
      );

-- Mapping Components 
    - We can do this via map() function of Javascript
    - it takes a function as an argument, there can be multilevel functions 
    - if we call map() with a array or list by passing the function then it iterate over the 
      list/array and map each element with the function at a time.
    - the function we use in as the argument it need to one property named `key` which can 
      uniquly identifes each element in the list/array it can be string, integer whatever but unique
    - this key is not a prop it is a special property which react require to differnentiate 
      between elements.

-- There are more functions who works same as map by taking another function as the argument but 
   their functionalites are differnentiate from each other
      - filter() and reduce() are the function which works before the es6 also
    - filter() : create a new array by keeping the items that return true.
        > ex: var numbers = [2,56,3,47,5];
              const newNumber = number.filter( (num) =>{
                  return num < 10;
              });
    - reduce() : Accumulate a value by doing something to each item in a array.
        first time loop runs the first element is gonna be accumulator.
          > ex: var numbers = [2,56,3,47,5];
              const newNumber = number.reduce( (accumulator, currentNumber) = > {
                return accumulator + currentNumber;
              });
  - find() and findIndex() are works after the ES6
    - find() : find the first item that matches from an array
        > ex: var numbers = [2,56,3,47,5];
              const newNumber = number.find( (num) => {
                return num > 10;  // 56
              })
    - findIndex() : find the first index that matches from an array
        > ex: var numbers = [2,56,3,47,5];
              const newNumber = number.find( (num) => {
                return num > 10;  // 1
              })

-- Conditional rendering    
    - It is a technique used to render different component depending on some condition




    - This is React@18 syntax to render 
    - in react@18 ReactDom.render() is not supported
    - and import ReactDom from react-dom is also not supported it needs `react-dom/client`

     import React from "react";
     import  ReactDom from "react-dom/client";
     import App from "./components/App";

     const root = ReactDom.createRoot(document.getElementById('root'));
   
     root.render(<div>
         <App />
     </div>);
