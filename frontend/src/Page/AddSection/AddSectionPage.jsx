import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const AddSectionPage = ({ id }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:8080/api/add-section/${id}`, {
        title,
        content,
        image
      });
      setMessage('Section added successfully');
      setTitle('');
      setContent('');
      setImage('');
    } catch (error) {
      console.error("Error adding Section:", error);
      setMessage('Failed to add Section');
    }
  };

  return (
    <Container>
      <h2>Add Section</h2>
      {message && <p>{message}</p>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title:</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>Content:</Form.Label>
          <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
        </Form.Group>
        <Form.Group controlId="formImage">
          <Form.Label>Image:</Form.Label>
          <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">Add Section</Button>
        <br />
      </Form>
      <br />
    </Container>
  );
}

export default AddSectionPage;
