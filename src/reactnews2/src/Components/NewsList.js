import React from 'react';
import Axios from 'axios';

export default class NewsList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    Axios({
      method: 'get',
      url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-19&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1',
      params: {
        language: 'en',
        sortBy: 'relevancy'
      }
    })
    .then(response => {
      console.log(response);
      this.setState({ articles: response.data.articles });
    });
  }

  render() {
    return(
      <ul>
        {this.state.articles.map(articles => <li> {articles.author} - {articles.title} </li>)}
      </ul>
    )
  }
}
