import { useEffect, useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, ListGroup } from 'react-bootstrap';

const EditSectionPage = () => {
  const [sections, setSections] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchSections = async () => {
      try {
        const res = await axios.get('http://localhost:8080/api/section');
        console.log('Fetched Section', res.data);
        setSections(res.data);
      } catch (error) {
        console.error("Error fetching section", error);
      }
    };
    fetchSections();
  }, []);

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setTitle(section.title);
    setContent(section.content);
    setImage(section.image);
  }

  const handleUpdate = async () => {
    try {
      const res = await axios.put(`http://localhost:8080/api/edit-section/${selectedSection._id}`, { title, content, image });
      setMessage('Section updated successfully');
      setSelectedSection(null);
      setTitle('');
      setContent('');
      setImage('');
      setSections(sections.map(sec => sec._id === res.data._id ? res.data : sec));
    } catch (error) {
      console.error("Error updating section", error);
      setMessage("Failed to update section");
    }
  }

  return (
    <Container>
      <h2>Edit Section</h2>
      {message && <p>{message}</p>}
      <div>
        <h3>Select Section to Edit</h3>
        <ListGroup>
          {sections.length > 0 ? (
            sections.map((section, index) => (
              <ListGroup.Item
                key={section._id}
                onClick={() => handleSectionSelect(section)}
                active={selectedSection && selectedSection._id === section._id}
                action
              >
                {index + 1}. {section.title}
              </ListGroup.Item>
            ))
          ) : (
            <p>No sections found</p>
          )}
        </ListGroup>
      </div>
      {selectedSection && (
        <div>
          <h3>Edit Section</h3>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formContent">
              <Form.Label>Content:</Form.Label>
              <Form.Control type="text" value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image:</Form.Label>
              <Form.Control type="text" value={image} onChange={(e) => setImage(e.target.value)} />
            </Form.Group>
            <Button variant="primary" onClick={handleUpdate}>Update Section</Button>
          </Form>
        </div>
      )}
    </Container>
  );
}

export default EditSectionPage;
