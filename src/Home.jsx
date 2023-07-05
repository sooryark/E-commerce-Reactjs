import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="hero-section py-5">
              <h1 className="fw-bold">Welcome to Our E-commerce Store</h1>
              <p>Discover the best products for all your needs.</p>
              <Link to="products" className="btn btn-success rounded-5 btn-lg">Shop Now</Link>
            </div> 
          </Col>
        </Row>
      </Container>

             
           
    </>
  );
};

export default Home;
