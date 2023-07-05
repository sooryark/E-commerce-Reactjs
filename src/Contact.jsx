import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Contact = () => {
  const [formData, setFormData] = useState({name:"",email:"",comments:""});

  const HandleChange = (e) => {
    const {name,value} = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
  }));
    console.log(e)
  };

  const submit = ()=>{
       alert("Your Messsage Received!..Thank You")
       console.log(formData)
  }
  
 
  return (
    <>
      <Container>
        <Row>
          <Col className="col-12 d-flex flex-column justify-content-center contact py-2" style={{height:600}}>
            <h1 className="text-center text-success">Contact Us</h1>
            <p className="text-white text-center">
              Please fill out the form below to get in touch with us.
            </p>
            <Form onSubmit={(e) => e.preventDefault()}>
            <FloatingLabel
              controlId="floatingInput"
              label="Enter your Name"
              className="mb-3"
            >
              <Form.Control type="text" name="name" value={formData.name} onChange={HandleChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="email" className="mb-3">
              <Form.Control type="email" name="email" value={formData.email} onChange={HandleChange}/>
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                name="comments"
                className="mb-3"
                placeholder="Leave a comment here"
                style={{ height: "100px" ,}}
                value={formData.comments}
                onChange={HandleChange}
              />
            </FloatingLabel>
            <div className="text-center">
            <Button className="btn btn-success" onClick={submit}>Submit</Button>
            </div>
            </Form>
      
           
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
