// used to create and render components
import React from 'react';

// used to react with the DOM
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// 1) Create a new COMPONENT, component should produce some html

// const = ES6 syntax = final value of variable, aka, constant at this point, we're never going to reassign 'App'
// no longer use 'var', use 'const' or 'let'
const API_KEY = 'AIzaSyAKaiQaodB8LDgZ6RMgaSX8jR8-8pAgsGk';

// JSX = subset of JS, to write what looks like html
// babel translates this to vanilla JS/actual html
// render puts it on the page

// What is React? JS library to is used to produce html that is shown to the user in the web browser.

// Component = VIEW = snippet of code that produces html, collection of JS objects

// React code = multiple components nested

// this is a class, not instance
// factory that creates instances
// create instance by making an App tag (<App />)

// const App = function() {
//   return <div>Hi!</div>;
// }

// => fat arrow is the same as 'function'
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// App = class
// <App/> = instance of class

// 2) Take component's generated HTML & put on page (in DOM)
// 2nd argument is a target DOM element
ReactDOM.render(<App/>, document.querySelector('.container'));
