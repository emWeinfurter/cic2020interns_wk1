import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Axios from 'axios';
import './NewsList.css';

export default class NewsList extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    Axios({
      method: 'get',
      url: 'http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-21&sortBy=publishedAt&apiKey=92373e995c97437a974ef496fabf8ab1',
      params: {
        language: 'en',
        sortBy: 'relevancy'
      }
    })
    .then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  render() {
    return(
      <Container>
          {this.state.articles.map(articles => 
          <div class="table-responsive-sm">
            <table class="table">
            <Card className="text-center">
              <Card.Img src={articles.urlToImage} />
              <Card.Body>
                <Card.Title>{articles.title}</Card.Title>
                <Card.Text>{articles.author}</Card.Text>
                <a href={articles.url} class="btn btn-primary btn-block" role="button">Read Here</a>
              </Card.Body>
            </Card>
            </table>
          </div>
          )}
      </Container>
    )
  }
}
