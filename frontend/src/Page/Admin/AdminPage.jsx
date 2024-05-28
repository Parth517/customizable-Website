import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const AdminPage = () => {
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/edit-images");
  };
  const handleUpdateSection = () => {
    navigate("/edit-section");
  };
  const handleAddImage = () => {
    navigate("/add-image");
  };
  const handleAddSection = () => {
    navigate("/add-section");
  };

  const handleAddCard = () => {
    navigate("/add-card");
  };

  const handleUpdateCard = () => {
    navigate("/edit-cards");
  };

  const handleDeleteSection = () => {
    navigate("/delete-section");
  };

  const handleDeleteCard = () => {
    navigate("/delete-cards");
  };

  const handleDeleteImage = () => {
    navigate("/delete-images");
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <Container className="mt-5">
      <h3>Admin Page</h3>
      <p>Welcome to the admin page!</p>
      <Row>
        <Col md={6} lg={4}>
          <Card
            onClick={handleAddImage}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Add Carousel Image</Card.Title>
              <Card.Text>Click here to add a new carousel image.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleAddSection}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Add Section</Card.Title>
              <Card.Text>Click here to add a new section.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleAddCard}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Add Card</Card.Title>
              <Card.Text>Click here to add a new card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleUpdate}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Update Carousel Image</Card.Title>
              <Card.Text>Click here to update carousel images.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleUpdateSection}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Update Section</Card.Title>
              <Card.Text>Click here to update sections.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleUpdateCard}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Update Card</Card.Title>
              <Card.Text>Click here to update cards.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleDeleteSection}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Delete Section</Card.Title>
              <Card.Text>Click here to delete section.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleDeleteCard}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Delete Card</Card.Title>
              <Card.Text>Click here to delete card.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleDeleteImage}
            className="mb-4"
            style={{ cursor: "pointer" }}
          >
            <Card.Body>
              <Card.Title>Delete Image</Card.Title>
              <Card.Text>Click here to delete image.</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} lg={4}>
          <Card
            onClick={handleLogout}
            className="mb-4"
            style={{ cursor: "pointer" }}
            bg="danger"
            text="white"
          >
            <Card.Body>
              <Card.Title>Logout</Card.Title>
              <Card.Text>Click here to log out of the admin panel.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
