import React from 'react';
import ReactDom from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyAkk0Tdc62Q9ZrHOTbwa7lA4nLg5L0OA-g';

// Create a new component which will produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar/>
        </div>
    );
}

// Take this component's generated HTML and put it in the DOM
ReactDom.render(<App/>, document.querySelector('.container'));
