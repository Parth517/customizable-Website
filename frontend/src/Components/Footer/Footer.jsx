import {
  MDBFooter,
  MDBContainer,
  MDBCol,
} from 'mdb-react-ui-kit';
import './App.css'; // Ensure to import your CSS file

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <MDBFooter className='text-center dark-gray-footer'>
      <MDBContainer className='p-4'>
        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <MDBCol>
          <p>Logo &copy; {currentYear}</p>
        </MDBCol>
      </div>
    </MDBFooter>
  );
}

export default Footer;
