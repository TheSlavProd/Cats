import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [],
      limit: 1,
    };
  }

  componentDidMount() {
    this.loadMore();
  }

  loadMore = () => {
    fetch(
      `https://api.thecatapi.com/v1/images/search?limit=${this.state.limit}&page=${this.state.page}&category_ids=1`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          cats: data,
        });
      });
  };

  render() {
    const { cats } = this.state;

    return (
      <Container style={{ paddingTop: 100 }}>
        <Row>
          {cats.map((cat) => (
            <Col>
              <Card key={cat.id}>
                <img
                  src={cat.url}
                  style={{ height: "80vh", objectFit: "cover" }}
                />
              </Card>
            </Col>
          ))}
        </Row>
        <br />
        <Button onClick={this.loadMore} variant="primary" size="lg" active>
          Get random cat
        </Button>
      </Container>
    );
  }
}

export default Random;
