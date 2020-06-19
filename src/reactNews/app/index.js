import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

/*class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
    this.search();
  }

  search() {
    Axios.get('http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-19&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1')
    .then(response => response.json())
    .then(json => {
      console.log('articles', json);
      let { articles } = json;
      this.setState({articles});
    });
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
    url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-19&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1',
    params: {
      language: 'en',
      sortBy: 'relevancy'
    }
  })
    .then(response => iterateArt(response))
    .catch(err => console.error(err));
}

function iterateArt(response) {
  //forEach troubleshooting from https://stackoverflow.com/questions/46141450/create-li-from-loop-through-array-and-display-to-html-as-a-list
  const res = response.data.articles;

  res.forEach(arr => {
    console.log(arr.title);
    return document.getElementById('root').innerHTML = `
    <div style="background-color:#f3852a;color:black;width:300px;height:500px" class="limit">
      <a href={arr.url}>
        <img
          ng-src={arr.urlToImage}
          alt="image not avaliable"
          style="width:300px;height:400px;"
          position="center"
        />
      </a>
      <h3 class="text-center">${arr.title}</h3>
      <p class="display-9 text-center">
        ${arr.author} <br><br>
        <h7 class="text-center"style="bold">Published: ${arr.publishedAt} <br></h7>
        Description: ${arr.description} <br>
        <a href={arr.url}>link</a>
        </p>
    </div>
    `;
  });

//problem idea: https://stackoverflow.com/questions/56542774/how-to-use-map-with-data-from-axios-response
  /*const responseArr = response.data.articles;
  //Add console.log(arr) below to show the map is working.
  const resArray = responseArr.map(arr => {
    return document.getElementById('root').innerHTML = `
    <div style="background-color:  #f3852a;color:black;width:300px;height:500px" class="limit">
      <a href={arr.url}>
        <img
          ng-src={arr.urlToImage}
          alt="image not avaliable"
          style="width:300px;height:400px;"
          position="center"
        />
      </a>
      <h3 class="text-center">${arr.title}</h3>
      <p class="display-9 text-center">
        ${arr.author} <br><br>
        <h7 class="text-center"style="bold">Published: ${arr.publishedAt} <br></h7>
        Description: ${arr.description} <br>
        <a href={arr.url}>link</a>
        </p>
    </div>
    `;
  });*/
}

loadAPI();
