import {
  MDBCarousel,
  MDBCarouselItem,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

import './ClientsTestimonials'

export default function ClientsTestimonials() {
  return (
    <>
    <img src="https://i.ibb.co/tXrvQMQ/Capture.png" className="cltest"/>
      <MDBContainer className="my-5">
        <MDBCarousel showControls dark>
          <MDBCarouselItem className="active text-center">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  alt="avatar"
                  className="rounded-circle shadow-1-strong mb-4"
                  style={{ width: "50px" }}
                />
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>

          <MDBCarouselItem className="text-center">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol lg="8">
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis.
                </p>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                  alt="avatar"
                  className="rounded-circle shadow-1-strong mb-4"
                  style={{ width: "50px" }}
                />
                <h5 className="mb-3">John Doe</h5>
                <p>Web Developer</p>
              </MDBCol>
            </MDBRow>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBContainer>
    </>
  );
}
