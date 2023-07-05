import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { addtoCart } from "./features/productslice"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Productpage = ()=>{
 const params =  useParams()
 const {productdata} = useSelector((state)=>state.product)
 const element = productdata.find((val)=>val.id === parseInt(params.id))
 
 //const [isloading,setisLoading] = useState(false)

 const dispatch = useDispatch()

 const navigate = useNavigate()


 const addItem = (element)=>{
       dispatch(addtoCart(element))
       alert("Wait! your product is ready to add")
       setTimeout(()=>{
        navigate("/cart")
       },2000)
      
 }



  return(
    <>
    <Container>
      <Row>
        <Col>
        <Card key={element.id} className="singleproduct text-center">
      <Card.Img variant="top img-fluid mx-auto" src={element.image} fluid/>
      <Card.Body>
        <Card.Title className="fw-bold text-success">{element.category}</Card.Title>
        <Card.Text>
        {element.description}
        </Card.Text>
        <Card.Text>
        price:-Rs ₹{element.price}only
        </Card.Text>
        <Button variant="btn btn-success mx-auto" onClick={()=>addItem(element)}>Add to Cart</Button>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Productpage