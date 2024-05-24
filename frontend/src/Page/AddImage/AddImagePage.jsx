import { useState } from 'react';
import axios from 'axios';

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
    <div>
      <h2>Add Image</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          URL:
          <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} required />
        </label>
        <br />
        <label>
          Label:
          <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} required />
        </label>
        <br />
        <label>
          Caption:
          <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add Image</button>
      </form>
    </div>
  );
};

export default AddImagePage;
