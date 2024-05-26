import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const AddImagePage = ({ id }) => {
  const [url, setUrl] = useState('');
  const [label, setLabel] = useState('');
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post(`http://localhost:8080/api/add-images/${id}`, {
        url,
        label,
        caption
      });
      setMessage('Image added successfully');
      setUrl('');
      setLabel('');
      setCaption('');
    } catch (error) {
      console.error("Error adding image:", error);
      setMessage('Failed to add image');
    }
  };

  return (
    <Container>
      <h2>Add Image</h2>
      {message && <p>{message}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUrl">
          <Form.Label>URL:</Form.Label>
          <Form.Control type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formLabel">
          <Form.Label>Label:</Form.Label>
          <Form.Control type="text" value={label} onChange={(e) => setLabel(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formCaption">
          <Form.Label>Caption:</Form.Label>
          <Form.Control type="text" value={caption} onChange={(e) => setCaption(e.target.value)} required />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Add Image</Button>
        <br />
      </Form>
      <br />
    </Container>
  );
};

export default AddImagePage;
