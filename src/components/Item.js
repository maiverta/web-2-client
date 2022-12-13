import React from 'react';
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(props) {
    return (
      <Card style={{ width:"11rem",maxWidth: '11rem' , display: 'flex', alignItems: 'center' }} >
        <Card.Img border="primary" style={{ width: '10rem', height:'7rem' }} variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
          { props.description}
          </Card.Text>
        </Card.Body>
        <Card.Text>{ props.price}₪</Card.Text>
        <div className='buttons'> 
            <Card.Text><Button variant="outline-dark" size="sm" onClick={props.onAddToChart}>+</Button></Card.Text>
            <Card.Text><Button variant="outline-dark" size="sm" onClick={props.onRemoveFromChart}>-</Button></Card.Text>
        </div>

      </Card>
          );
}

export default Item;



