import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const AddCardPage = ({id}) => {
    const [title,setTitle]=useState('');
    const [image,setImage]=useState('');
    const [content,setContent]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const response=await axios.post(`http://localhost:8080/api/add-cards/${id}`,{
                title,image,content
            });
            setMessage('Card Created Successfully');
            setTitle('');
            setImage('');
            setContent('')
        } catch (error) { 
            console.error("Error adding Card:", error);
            setMessage('Failed to add image');
        }
    }
  return (
    <Container>
      <h2>Add Card</h2>
      {message && <p>{message}</p>}
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formUrl">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formLabel">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formCaption">
          <Form.Label>Content:</Form.Label>
          <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Add Card</Button>
        <br />
      </Form>
    </Container>
  )
}

export default AddCardPage
