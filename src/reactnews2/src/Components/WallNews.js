import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Axios from 'axios';

export default class WallNews extends React.Component {
  state = {
    articles: []
  };

  componentDidMount() {
    Axios({
      method: 'get',
      url: 'http://newsapi.org/v2/everything?domains=wsj.com&apiKey=92373e995c97437a974ef496fabf8ab1',
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
          <h1 class="display-3 text-center" body="padding-top: 56px; padding-bottom: 56px">Wall Street Journal</h1>
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