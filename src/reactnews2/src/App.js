import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [news, setNews] = useState([]); //declare state
  const loadAPI = () => {
    axios({
      method: 'get',
      url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-19&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1',
      params: {
        language: 'en',
        sortBy: 'relevancy'
      }
    })
      .then(response => {
        setNews(response.data.articles);
        console.log(news);
      })
      .catch(err => console.error(err));
    }

  useEffect(() => {loadAPI()}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
