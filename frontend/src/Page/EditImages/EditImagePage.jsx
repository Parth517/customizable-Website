import { useEffect, useState } from 'react';
import axios from 'axios';

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
        console.log('Fetched images:', res.data); // Log the response data
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
    <>
      <h2>Edit Images</h2>
      {message && <p>{message}</p>}
      <div>
        <h3>Select Image to Edit</h3>
        <ul>
          {Array.isArray(images) && images.length > 0 ? (
            images.map((image) => (
              <li key={image._id} onClick={() => handleImageSelect(image)}>
                {image.label}
              </li>
            ))
          ) : (
            <p>No images found</p>
          )}
        </ul>
      </div>
      {selectedImage && (
        <div>
          <h3>Edit Image</h3>
          <label>
            URL:
            <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
          </label>
          <br />
          <label>
            Label:
            <input type="text" value={label} onChange={(e) => setLabel(e.target.value)} />
          </label>
          <br />
          <label>
            Caption:
            <input type="text" value={caption} onChange={(e) => setCaption(e.target.value)} />
          </label>
          <br />
          <button onClick={handleUpdate}>Update Image</button>
        </div>
      )}
    </>
  );
};

export default EditImagePage;
