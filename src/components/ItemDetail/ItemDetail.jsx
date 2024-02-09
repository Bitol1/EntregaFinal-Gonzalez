import { useState} from 'react';
import { useCart } from '../../context/CartContext';
import { Card, ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, price, category, img, description, stock}) => {
    const [quantity, setQuantity] = useState(0)

    const { addItem } = useCart()


    const handleOnAdd = (quantity) => {
      const objProduct ={
            id,
            name,
            quantity,
            price,
            img
        }
        addItem(objProduct)
        setQuantity(quantity)
    }

    return (
        <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img}  />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{category}</ListGroup.Item>
          <ListGroup.Item>${price}</ListGroup.Item>
           <ItemCount stock={stock} onAdd={handleOnAdd}/>
        </ListGroup>
      </Card>
      </div>
   
    )
    }

export default ItemDetail;
