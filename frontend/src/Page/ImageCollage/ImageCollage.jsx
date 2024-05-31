import {Container} from 'react-bootstrap';
import "./ImageCollage.css";

const ImageCollage = () => {
  return (
    <>
    <Container className="collage-section">
      <div className="collage-container">
        <div className="collage-item item1">
          <img
            src="https://i.ibb.co/M79FvWx/pexels-evonics-1058276.jpg"
            alt="Image 1"
          />
        </div>
        <div className="collage-item item2">
          <img
            src="https://i.ibb.co/GVngMG5/pexels-negativespace-34639.jpg"
            alt="Image 2"
          />
        </div>
        <div className="collage-item item3">
          <img
            src="https://i.ibb.co/CmsJ0LZ/advertisement-586132-1280.jpg"
            alt="Image 3"
          />
        </div>
        <div className="collage-item item4">
          <img
            src="https://i.ibb.co/GVngMG5/pexels-negativespace-34639.jpg"
            alt="Image 4"
          />
        </div>
      </div>
    </Container>
    </>
  );
};

export default ImageCollage;
