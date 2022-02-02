import React from "react";
import { Col, Row ,Image, ListGroup,Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";

const ProductScreen = ({match}) => {
    const product = products[0];
  return (
      <>
      <Link to="/" className="btn btn-light">Go back</Link>
      <Row>
          <Col md={6}>
              <Image src={product.image} alt={product.name} fluid></Image>
          </Col>
          <Col md={3}>
              {/*name rating description etc */}
              <ListGroup variant="fluid">
                  <ListGroup.Item>
                      <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Rating val={product.rating} text={product.numReviews}/>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Price: ${product.price}
                  </ListGroup.Item>
              </ListGroup>
          </Col>
          <Col md={3}>
              <Card>
                  <ListGroup variant="dark">
                      <ListGroup.Item variant="dark">
                          <Row>
                              <Col>Price:</Col>
                              <Col>
                              <strong>${product.price}</strong>
                              </Col>
                          </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <Row>
                              <Col>Status:</Col>
                              <Col>
                              <strong>{product.countInStock?"In Stock":"Out of Stock"}</strong>
                              </Col>
                          </Row>
                      </ListGroup.Item>
                      <ListGroup.Item className="d-grid">

                          <Button className="btn-block" type="button" disabled={product.countInStock===0}>
                              Add to Cart
                          </Button>
                      </ListGroup.Item>
                  </ListGroup>
              </Card>
          </Col>
      </Row>
      </>
  );
};

export default ProductScreen;