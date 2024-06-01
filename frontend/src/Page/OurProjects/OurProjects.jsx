import { Col, Card } from "react-bootstrap";
import './OurProjects.css';
import { useEffect, useState } from "react";
import axios from "axios";

const OurProjects = () => {
  const [images,setImages]=useState([])

  useEffect(()=>{
    const fetchImages=async () =>{
      try {
        const res= await axios.get("http://localhost:8080/api/project")
        setImages(res.data);
      } catch (error) {
        console.error('Error fetching cards:', error);
      }
    }
    fetchImages();
  },[])
  return (
    <>
      <br />
      <br />
      <br /> {images.map((image)=>(
          
       
      // eslint-disable-next-line react/jsx-key
      <Col md={12}>
       
        <Card className="card1">
          <h4 className="ourhead1">{image.heading1}</h4>
          <h2 className="ourhead2">{image.heading2}</h2>
        </Card>
        <div className="collage-section">
          <div className="collage-container">
            <div className="collage-item item1">
              <img
                src={image.url1}
                alt="Image 1"
              />
            </div>
            <div className="collage-item item2">
              <img
                src={image.url2}
                alt="Image 2"
              />
            </div>
            <div className="collage-item item3">
              <img
                src={image.url3}
                alt="Image 3"
              />
            </div>
            <div className="collage-item item4">
              <img
                src={image.url4}
                alt="Image 4"
              />
            </div>
          </div>
        </div>
      </Col>
       ))}
    </>
  );
};

export default OurProjects;
