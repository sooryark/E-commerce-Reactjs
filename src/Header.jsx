import React from "react";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs"
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = () => {
  const {cartItems} = useSelector((state)=>state.product)
  return (
    <>
   
   
   <Navbar expand="lg" className="bg-dark">
      <Container>
        <Navbar.Brand><Link to="/" className="text-success h1 fw-bold" style={{textDecoration:"none",fontSize:26}}>Got style?</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-white"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto d-flex gap-2" style={{fontSize:18}}>
            <Link to="/" className="text-white" style={{textDecoration:"none"}}>Home</Link>
            <Link to="products" className="text-white" style={{textDecoration:"none"}}>Products</Link>
            <Link to="about" className="text-white" style={{textDecoration:"none"}}>About</Link>
            <Link to="contact" className="text-white" style={{textDecoration:"none"}}>Contact</Link>
            <Link to="cart" className="text-white position-relative" style={{textDecoration:"none"}}>
              <BsCart4 style={{fontSize:30}}/><span className="text-white bg-danger p-1 rounded-3 position-absolute" style={{top:-10,left:8,fontSize:14,fontWeight:"bold"}}>{cartItems.length}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
         
    </>
  );
};

export default Header;
