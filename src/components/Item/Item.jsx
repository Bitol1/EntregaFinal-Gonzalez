import { Card, ListGroup, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Item = ({id, name, price, category, img}) => {

    return (
        <div>
        <Card style={{ width: '18rem',  }}>
        <Card.Img variant="top" src={img} className='img-fluid'  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{category}</ListGroup.Item>
          <ListGroup.Item>${price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
        <Link to={`/detail/${id}`}>
        <Button variant="primary">Detalle</Button>
        </Link>
        </Card.Body>
      </Card>
      </div>
   
    )
    }
export default Item;
    
    