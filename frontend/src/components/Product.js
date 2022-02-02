

import React from 'react';
import { Card } from "react-bootstrap";
// import { LinkContainer } from "react-router-bootstrap"
import { Link } from 'react-router-dom';
import Rating from "./Rating";

const Product = ({ product }) => {
    return (

        // <LinkContainer to={`product/${product._id}`}>
            <Card className="my-3 p-3 rounded">
                <Link to={`product/${product._id}`}>
                    <Card.Img src={product.image} varient="top" />
                </Link>

                <Card.Body>
                    {/* With link container the page doesn't have to reload like in href="" */}
                    <Link to={`/product/${product._id}`}>
                        <Card.Title as="h5">
                            <strong>{product.name}</strong>
                        </Card.Title>
                    </Link>

                    <Card.Text as="div">
                        <div className="my-3">
                            {product.rating} from {product.numReviews} reviews
                        </div>

                        <Rating val={product.rating}></Rating>
                    </Card.Text>

                    <Card.Text as="h3">${product.price}</Card.Text>
                </Card.Body>
            </Card>
        // </LinkContainer>

    );
};

export default Product;
