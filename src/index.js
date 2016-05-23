import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAKaiQaodB8LDgZ6RMgaSX8jR8-8pAgsGk';

const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

ReactDOM.render(<App/>, document.querySelector('.container'));
