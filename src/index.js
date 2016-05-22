import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyBWYIxzRkRFXD9HzESbAinNVivg0Q1C1nI"

// 1) Create a new component, should produce some html

// const = ES6 syntax = final value of variable, aka, constant at this point, we're never going to reassign 'App'

// JSX = subset of JS, to write what looks like html


const App = () => {
  // return <div>Hello World</div>;
    return(<div>
      <SearchBar/>
    </div>
  );
}

// 2) Take component's generated HTML & put on page (in DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
