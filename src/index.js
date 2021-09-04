import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
  { id: 1, name: 'Ivan' },
  { id: 2, name: 'Olesia' },
  { id: 3, name: 'Diana' },
  { id: 4, name: 'Maryan' },
  { id: 5, name: 'Valentyn' },
];
let messagesData = [
  { id: 1, message: 'Hi, how are you?' },
  { id: 2, message: 'What are you doing?' },
  { id: 3, message: 'Have you seen this film?' },
];
let postsData = [
  { id: 1, message: 'I am learning React', likesCount: 5 },
  { id: 1, message: 'Lorem...', likesCount: 5 },
  { id: 1, message: 'Lorem...', likesCount: 5 },
  { id: 1, message: 'Hi, its my first post', likesCount: 42 },

];

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData}
      messagesData={messagesData}
      postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
