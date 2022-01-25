import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

const App = () => { 

    return (
        <div className="app">
            Hello, world
        </div>
    )
}

const rootElement = document.createElementById('root');
ReactDOM.render(<App/>, rootElement)