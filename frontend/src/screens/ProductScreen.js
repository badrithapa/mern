import React, { useEffect, useState } from "react";
import { Col, Row ,Image, ListGroup,Card, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
// import products from "../products";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductScreen = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`http://localhost:4500/api/v1/products/${id}`);
            console.log(data);
            setProduct(data);
            // console.log(product);
        };
        fetchProduct();
    },[id]);
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
                      <Rating val={product.rating} text={`${product.numReviews} reviews`}/>
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