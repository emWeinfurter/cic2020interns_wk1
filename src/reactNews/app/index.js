import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './build.index.css';
import Axios from 'axios';

/*class Sad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    search();
  }

  search() {
    Axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1')
    .then(response => response.json())
    .then(json => {
      console.log('articles', json);
      let { articles } = json;
      this.setState({articles});
    })
  }

  render() {
    return (
      <div>
        {this.state.articles}
      </div>
    )
  }
}*/

function loadAPI() {
  Axios({
    method: 'get',
    url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-18&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1'
  })
    .then(response => iterateArt(response))
    .catch(err => console.error(err));
}

function iterateArt(response) {
  const responseArr = response.data.articles;
  const resArray = responseArr.map(arr => {
    return document.getElementById('root').innerHTML = `
    <div>
      <p class="display-5 text-center mb-3" style="font-size:20px">${arr.title} <br></p>
      <p class="display-9 text-center">
        ${arr.author} <br>
        ${arr.publishedAt} <br>
        ${arr.description}
        </p>
    </div>
    `;
  });

  /*return (<div>
  {response.data.articles.map((el) => (
    <ul>Author: {el.author} Title: {el.title}</ul>
  ))}
  </div>);*/
}

loadAPI();
