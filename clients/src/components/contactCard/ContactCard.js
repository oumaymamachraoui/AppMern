import React from 'react'
import {Card, Button} from 'react-bootstrap'
const ContactCard = ({contact}) => {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
        {contact.email}
        </Card.Text>
        <Card.Text>
        {contact.phone}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard