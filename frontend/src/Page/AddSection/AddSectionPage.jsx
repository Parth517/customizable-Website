import  { useState } from 'react'
import axios from 'axios';
// eslint-disable-next-line react/prop-types
const AddSectionPage = ({id}) => {
    const [title,setTitle]= useState('');
    const [content,setContent]=useState('');
    const [image,setImage]=useState('');
    const [message,setMessage]=useState('');

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const response= await axios.post(`http://localhost:8080/api/add-section/${id}`,{
                title,content,image
            });
            setMessage('Section added successfully');
            setTitle('')
            setContent('')
            setImage('')
        } catch (error) {
            console.error("Error adding Section:", error);
            setMessage('Failed to add Section');
        }
    }
  return (
    <div>
      <h2>Add Section</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
            Title:
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>
        
        <label>
            Content:
            <input type="text" value={content} onChange={(e) => setContent(e.target.value)} required />
        </label>

        <label>
            Image:
            <input type="text" value={image} onChange={(e) => setImage(e.target.value)} required />
        </label>
        <br />
        <button type="submit">Add Section</button>
      </form>
    </div>
  )
}

export default AddSectionPage
