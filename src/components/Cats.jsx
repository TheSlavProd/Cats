import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getCats } from "../api/getCats";
import { setCats } from "../redux/reducers";

const Cats = () => {
  const categoryId = useSelector((state) => state.cats.categoryId);
  const data = useSelector((state) => state.cats.cats);
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    const newCats = await getCats(12, categoryId);
    dispatch(setCats(newCats));
  };

  return (
    <Container style={{ paddingTop: 100 }}>
      <Row>
        {data.map((cat) => (
          <Col key={cat.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" width={200} height={200} src={cat.url} />
            </Card>
          </Col>
        ))}
      </Row>
      <br />
      <Button onClick={handleLoadMore} variant="primary" size="lg" active>
        Load more...
      </Button>
    </Container>
  );
};

export default Cats;
