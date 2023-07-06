import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyData, removeItem } from "./features/productslice";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

const Cart = () => {
  const [items, setItem] = useState([]);

  const dispatch = useDispatch();
   
  const [price,setPrice] = useState([0])
  const [tax,setTax] = useState(0)
  

  const { cartItems } = useSelector((state) => state.product);
  useEffect(() => {
    setItem(cartItems);
  }, [cartItems]);

  const Increment = (item) => {
    dispatch(modifyData({ ...item, count: item.count + 1 }));
  };

  const Decrement = (item) => {
    if (item.count === 1) {
      return;
    }
    dispatch(modifyData({ ...item, count: item.count - 1 }));
  };

  const HandleDelete = (item) => {
    dispatch(removeItem(item));
    console.log(item);
  };

  const totalel = items.reduce((acc,item)=>acc * item.price,0)
  console.log(totalel)

  const placeOrder = (item) => {
          
         
    items.map((ele)=>{
      if(ele.id === item.id){
        setPrice(item.count * item.price)
        setTax(price * 0.1)   
      }
      return console.log(ele)
    }
    
    )
   

  };

   
    console.log(price)
  

  return (
    <Container className="cartpage py-2">
      <Row>
        {items.length > 0 ? (
          <>
            <Col className="col-lg-8 col-sm-12 p-2 rounded-1 d-flex flex-column align-items-center">
              <h1 className="text-success text-center">
                Cart Items {cartItems.length}
              </h1>
              <Table
                className="striped bordered text-center hover w-100 rounded-5 table-responsive table-sm"
                responsive
              >
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
                          <Image
                            src={item.image}
                            className="img-fluid cartimg"
                            alt="product"
                            fluid
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
                        <td>{item.count * item.price.toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={()=>placeOrder(item)}
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
            <Col className="col-lg-4 col-sm-12  d-flex flex-column align-items-center justify-content-center text-success" style={{height:600}}>
             
             <>
             {
              price ? 
              <>
              <h1 className="text-black fw-bold">Summary</h1>
              <h6 style={{ fontWeight: "bold" }}>
                SubTotal: Rs:- ₹ {price}
              </h6>
              <h6 style={{ fontWeight: "bold" }}>
                Tax: Rs:- ₹ {parseInt(price*0.1).toFixed(2)}
              </h6>
              <h4 style={{ fontWeight: "bold" }}>
                Total: Rs:- ₹ {parseInt(tax+price).toFixed(2)}
                
              </h4>
              </> :  <p>please! place order to get your Summary Details</p>
             }
                
                </>
              
             
          
             </Col>
          </>
        ) : (
          <>
            <h1 className="text-center text-danger mt-5 fw-bold">
              Your Cart List is Empty Now
            </h1>
            <p className="display-1 text-center">&#x1F61F;</p>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
