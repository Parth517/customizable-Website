import {Col, Container } from 'react-bootstrap';
import './NewPage.css';
import { BsStack } from "react-icons/bs";
import { MdStarBorder } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";



const NewPage = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <Container className="newContain">
          <Col md={4} className='section1 text-center'>
          <BsStack className="stack"/>
            <h4 className="heading">MULTI FORMAT MEDIA</h4>
            <p className="texts">Billboards capture repeat exposure 
              business message more effectively than 
              almost any other marketing channel.</p>
          </Col>
          <Col md={4} className='section1 text-center'>
          <MdStarBorder className="star"/>
            <h4 className="heading">SMARTLY PLANNED</h4>
            <p className="texts">Start building your brand with the 
              strategic one. industry expertise to 
              solutions that .</p>
          </Col>
          <Col md={4} className='section1 text-center'>
          <IoMdCheckmarkCircleOutline className="check" />
            <h4 className="heading">BUILD BRANDS</h4>
            <p className="texts">A business is only as good as its 
              strategic process, and that’s what 
              contributes to expectations..</p>
          </Col>
      </Container>
    </>
  );
};

export default NewPage;
