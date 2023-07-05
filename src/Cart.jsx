import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyData, removeItem } from "./features/productslice";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";

const Cart = () => {
  const [items, setItem] = useState([]);

  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.product);
  useEffect(() => {
    setItem(cartItems);
  }, [cartItems]);

  const Increment = (item) => {
    dispatch(modifyData({ ...item, count: item.count + 1 }));
  };

  const Decrement = (item) => {
    dispatch(modifyData({ ...item, count: item.count - 1 }));
  };

  const HandleDelete = (item) => {
    dispatch(removeItem(item));
    console.log(item);
  };

  const placeOrder = () => {
    alert("Your order is ready to placed.");
  };

  const subtotal = items.reduce((acc, item) => acc + item.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <Container className="cartpage py-2">
      <Row>
        
          {
            items.length > 0 ? (
              <>
              <Col className="col-lg-8 col-sm-12 p-2 rounded-1 d-flex flex-column align-items-center">
          <h1 className="text-success text-center">
            Cart Items {cartItems.length}
          </h1>
            <Table className="striped bordered text-center hover w-75" responsive>
              <thead className="fw-bold">
                <tr>
                  <th>product-Image</th>
                  <th>Name</th>
                  <th colSpan={3}>Quantity</th>
                  <th>Price</th>
                  <th>Buy Now</th>
                  <th>Action</th>
                </tr>
              </thead>
  
              {items &&
                items.map((item) => (
                  <tbody>
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.image}
                          className="img-fluid cartimg"
                          alt="product"
                        />
                      </td>
                      <td>{item.category}</td>
                      <td>
                        <span
                          className="bg-dark text-white p-2 rounded-3"
                          onClick={() => Decrement(item)}
                        >
                          -
                        </span>
                      </td>
                      <td>{item.count}</td>
                      <td>
                        <span
                          className="bg-dark text-white p-2 rounded-3"
                          onClick={() => Increment(item)}
                        >
                          +
                        </span>
                      </td>
                      <td>{(item.price * item.count).toFixed(2)}</td>
                      <td>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={placeOrder}
                        >
                          Place Order
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => HandleDelete(item)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                ))}
            </Table>
            </Col>
         
            <Col className="col-lg-4  col-sm-12  d-flex flex-column align-items-center justify-content-center text-success">
              <h1 className="text-black">Summary</h1>
              <h6 style={{ fontWeight: "bold" }}>
                SubTotal: Rs:- ₹{subtotal.toFixed(2)}
              </h6>
              <h6 style={{ fontWeight: "bold" }}>Tax: Rs:- ₹{tax.toFixed(2)}</h6>
              <h4 style={{ fontWeight: "bold" }}>
                Total: Rs:- ₹{total.toFixed(2)}
              </h4>
            </Col>
            </>
            ) : (<>
            <h1 className="text-center text-danger mt-5 fw-bold">Your Cart List is Empty Now</h1>
            <p className="display-1 text-center">&#x1F61F;</p>
            </>)
          }
         
          
        
      </Row>
    </Container>
  );
};

export default Cart;
