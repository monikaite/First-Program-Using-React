import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let city = {
    name: "Madrid",
    country: "Spain"
};

function Hello(){
    return (
    <div>
        <h1>Welcome to React!</h1>
        <p>Let's build something.</p>
    </div>
    );
}

ReactDOM.render(
    <Hello/>,
  document.getElementById("root")
);