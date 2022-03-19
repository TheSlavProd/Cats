import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategoryId } from "../../redux/reducers";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();
  const categoryId = useSelector((state) => state.cats.categoryId);
  const categories = useSelector((state) => state.cats.categories);
  const dispatch = useDispatch();
  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ position: "fixed", zIndex: 9999, width: "100%" }}
    >
      <Container>
        <Navbar.Brand href="/home">Cats APP</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/home">
            <Button variant="outline-danger">Gallery</Button>
          </Link>
          <Link to="/random">
            <Button variant="outline-danger">Random</Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline-danger" style={{ marginRight: 24 }}>
              Contact
            </Button>
          </Link>

          {categories.map(({ id, name }) => (
            <Button
              style={{ marginRight: 8 }}
              variant="outline-primary"
              key={id}
              disabled={categoryId === id}
              onClick={() => {
                navigate("/cats");
                dispatch(setCategoryId(id));
              }}
            >
              {name}
            </Button>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Menu;
