import React, { Component } from 'react';

// component purpose = takes user input & makes API request
// functional component vs. class-based component

// FUNCTIONAL COMPONENT
// --the only thing that comes out is JSX
// const SearchBar = () => {
//   return <input/>
// };

// CLASS-BASED COMPONENT
// used whenever we want a component to have any sort of internal record keeping
// because users will be typing into this component, it needs the ability to introspect a little
// gives it access to all of the React.Component functionality
// every component that is class-based must have a render method
// class SearchBar extends React.Component {
//   render() {
//     return <input/>;
//   }
// }

// refactored by adding ', { Component }' at top
class SearchBar extends Component {
  render() {
    return <input/>;
  }
}

export default SearchBar;
