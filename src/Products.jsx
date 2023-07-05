import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./features/productslice";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Spinner from 'react-bootstrap/Spinner';

const Products = () => {
  const [data, setData] = useState("");
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
 

  const { productdata} = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(()=>{
    setData(productdata)
  },[productdata])

  const HandleSearch = () => {
    const searchitem = data.filter((newitem) =>
      newitem.category.toLowerCase().includes(search.toLowerCase())
    );
    setData(searchitem);
    console.log(data);
  };

  const HandleChange = (e) => {
   
    setSearch(e.target.value);
    const searchitem = data.filter((newitem) =>
      newitem.category.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(searchitem);
  };

  return (
    <>
      <Container className="products">
        <Row>
          <Col>
            <h1 className="text-success text-center">Our Products</h1>
            <Form
              className="d-flex justify-content-center align-items-center gap-2 col-12"
              onSubmit={(e) => e.preventDefault()}
            >
              <Form.Group className="w-100">
                <Form.Control
                  type="search"
                  value={search}
                  onChange={HandleChange}
                  placeholder="men's clothing,jewelery,electronics,women's clothing"
                />
              </Form.Group>
              <Button className="btn btn-success" onClick={HandleSearch}>
                Search
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col className="col-12 d-flex flex-wrap products justify-content-center py-3">
            {data.length > 0  ? (data.map((products) => (
                <Card
                  key={products.id}
                  onClick={() => navigate(`/productpage/${products.id}`)}
                  className="col-3 p-1 m-2 rounded-5"
                >
                  <Card.Img
                    variant="top"
                    src={products.image}
                    fluid="true"
                    className="mx-auto"
                  />
                  <Card.Body>
                    <Card.Title>{products.category}</Card.Title>
                    <Card.Text className="h-25">{products.title}</Card.Text>
                    <Card.Text className="text-success fw-bold">
                      price:-Rs ₹{products.price}only
                    </Card.Text>
                    <div className="text-center">
                      <Button className="btn btn-success mx-auto mt-2">
                        View Product
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              ))):
              <div className="text-center display-4">
              <Spinner animation="border" variant="success" />
             <p className="text-success fw-bold mt-5">Please Refresh the Page</p>
              </div>
                   
             }
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Products;
