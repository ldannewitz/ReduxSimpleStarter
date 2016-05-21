import React from 'react';

// 1) Create a new component, should produce some html

// const = ES6 syntax = final value of variable, aka, constant at this point, we're never going to reassign 'App'

// JSX = subset of JS, to write what looks like html

const App = function() {
  return <div>Hi!</div>;
}

// 2) Take component's generated HTML & put on page (in DOM)
React.render(App);
