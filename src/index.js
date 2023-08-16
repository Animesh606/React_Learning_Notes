// var React = require('react');
// var ReactDOM = require('react-dom');
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Single Element
// ReactDOM.render(<h1>Hello Animesh</h1>, document.getElementById('root'));

// Multiple element inside one tag (add a extra tag)
// ReactDOM.render(
//   <div>
//     <h1>Hello Animesh</h1>
//     <p>Welecome to react</p>
//     <p>Let's Grab it</p>
//   </div>,
//   document.getElementById('root'));

// Multiple element with array (Right total code with ',' separeted)
// ReactDOM.render(
//   [
//     <h1>Hello Animesh</h1>,
//     <p>Welecome to react</p>,
//     <p>Let's Grab it</p>
//   ],
//   document.getElementById('root'));

// Multiple element with React Fragment
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Hello Animesh</h1>
//     <p>Welecome to react</p>
//     <p>Let's Grab it</p>
//   </React.Fragment>,
//   document.getElementById('root'));

// Multiple element with React Fragment without write React Fragment
// ReactDOM.render(
//   <>
//     <h1>Hello Animesh</h1>
//     <p>Welecome to react</p>
//     <p>Let's Grab it</p>
//   </>,
//   document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<StrictMode><App/></StrictMode>);