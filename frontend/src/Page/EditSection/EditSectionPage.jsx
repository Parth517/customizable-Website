import { useEffect, useState } from 'react';
import axios from 'axios';

const EditSectionPage = () => {
  const [sections, setSection] = useState([]);
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
        if (Array.isArray(res.data)) {
          setSection(res.data);
        } else {
          console.error('Error: Response is not an array', res.data);
        }
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
      setSection(sections.map(section => section._id === res.data._id ? res.data : section));
    } catch (error) {
      console.error("Error updating section", error);
      setMessage("Failed to update section");
    }
  }

  return (
    <>
      <h2>Edit Section</h2>
      {message && <p>{message}</p>}
      <div>
        <h3>Select Section to Edit</h3>
        <ul>
          {Array.isArray(sections) && sections.length > 0 ? (
            sections.map((section) => (
              <li key={section._id} onClick={() => handleSectionSelect(section)}>{section.title}</li>
            ))
          ) : (
            <p>Section not found</p>
          )}
        </ul>
      </div>
      {selectedSection && (
        <div>
          <h3>Edit Section</h3>
          <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Content:
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
          </label>
          <label>
            Image:
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          </label>
          <br />
          <button onClick={handleUpdate}>Update Section</button>
        </div>
      )}
    </>
  )
}

export default EditSectionPage;
