import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel'; 
import './CarousalPage.css';
import axios from 'axios'

const CarousalPage = () => {
  const [images,setImages]=useState([]);
  useEffect(()=>{
    axios.get("http://localhost:8080/api/images")
    .then(response=>{
      setImages(response.data)
    })
    .catch(error => {
      console.error('Error fetching images:', error);
    });
  },[])
  return (
    <Carousel>
      {images.map((image,index)=>(
        <Carousel.Item key={index}>
          <img
          className="d-block w-100 carousel-img"
          src={image.url}
          alt={`${image.label}`} 
          />
          <Carousel.Caption>
            <h3>{image.label}</h3>
            <p>{image.caption}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarousalPage;
