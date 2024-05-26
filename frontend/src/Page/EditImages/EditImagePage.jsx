import { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert, ListGroup } from 'react-bootstrap';

const EditImagePage = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [url, setUrl] = useState('');
  const [label, setLabel] = useState('');
  const [caption, setCaption] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/images');
        console.log('Fetched images:', res.data);
        if (Array.isArray(res.data)) {
          setImages(res.data);
        } else {
          console.error('Error: Response is not an array', res.data);
        }
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchImages();
  }, []);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    setUrl(image.url);
    setLabel(image.label);
    setCaption(image.caption);
  };

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/edit-images/${selectedImage._id}`, { url, label, caption });
      setMessage('Image updated successfully');
      setSelectedImage(null);
      setUrl('');
      setLabel('');
      setCaption('');
      setImages(images.map(img => img._id === res.data._id ? res.data : img));
    } catch (error) {
      console.error('Error updating image', error);
      setMessage('Failed to update image');
    }
  };

  return (
    <Container className="mt-5">
      <h2>Edit Images</h2>
      {message && <Alert variant={message.includes('successfully') ? 'success' : 'danger'}>{message}</Alert>}
      <Row>
        <Col md={4}>
          <h3>Select Image to Edit</h3>
          <ListGroup>
            {Array.isArray(images) && images.length > 0 ? (
              images.map((image, index) => (
                <ListGroup.Item key={image._id} action onClick={() => handleImageSelect(image)}>
                  {index + 1}. {image.label}
                </ListGroup.Item>
              ))
            ) : (
              <p>No images found</p>
            )}
          </ListGroup>
        </Col>
        <Col md={8}>
          {selectedImage && (
            <Form className="mt-3">
              <h3>Edit Image</h3>
              <Form.Group className="mb-3" controlId="formUrl">
                <Form.Label>URL</Form.Label>
                <Form.Control
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Enter image URL"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formLabel">
                <Form.Label>Label</Form.Label>
                <Form.Control
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="Enter image label"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCaption">
                <Form.Label>Caption</Form.Label>
                <Form.Control
                  type="text"
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Enter image caption"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleUpdate}>
                Update Image
              </Button>
            </Form>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default EditImagePage;
