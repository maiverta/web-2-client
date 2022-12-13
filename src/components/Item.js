import React from 'react';
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
    return (
        <Card style={{ width: '10rem' , display: 'flex', alignItems: 'center' }} >
      <Card.Img border="primary" style={{ width: '10rem' }} variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        { props.description}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{ props.price}₪</Card.Footer>
      <Card.Footer><Button onClick={props.onAddToChart}>+</Button></Card.Footer>
      <Card.Footer><Button onClick={props.onRemoveFromChart}>-</Button></Card.Footer>
    </Card>
          );
}

export default Item;



