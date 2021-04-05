function component() {
    const element = document.createElement('div');
    element.innerHTML = 'Hello webpack';
    return element;
  }
  document.body.appendChild(component());

  import React from 'react';
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Hello, react!</h1>,
  document.getElementById('root')
);