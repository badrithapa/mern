

import React from 'react';
import { Card } from "react-bootstrap";
// import { Link } from 'react-router-dom';
import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`product/${product._id}`}>
                <Card.Img src={product.image} varient="top" />
            </a>

            <Card.Body>
                <a href={`product/${product._id}`}>
                    <Card.Title as="h5">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Text as="div">
                    <div className="my-3">
                        {product.rating} from {product.numReviews} reviews
                    </div>

                    <Rating val={product.rating}></Rating>
                </Card.Text>

                <Card.Text as="h3">${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
