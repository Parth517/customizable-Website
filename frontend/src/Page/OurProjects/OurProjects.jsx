import { Col, Card } from "react-bootstrap";
import './OurProjects.css';

const OurProjects = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Col md={12} className="mainpad">
        <Card className="card1">
          <h4 className="ourhead1">WHAT WE HAVE DONE</h4>
          <h2 className="ourhead2">Our Projects</h2>
        </Card>
        <div className="collage-section">
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
        </div>
      </Col>
    </>
  );
};

export default OurProjects;
