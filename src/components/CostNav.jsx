import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";

const CostNav = function () {
  return (
    <Navbar expand="lg" className="bg-black d-flex justify-content-between">
      <div>
        <Container
          fluid
          className="d-flex justify-content-between align-items-center ms-4"
        >
          <img src="../netflix_logo.png" alt="Logo" width={100} />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="text-white" href="#home">
                Home
              </Nav.Link>

              <Nav.Link className="text-white" href="#link">
                Tv Shows
              </Nav.Link>

              <Nav.Link className="text-white" href="#link">
                Movies
              </Nav.Link>

              <Nav.Link className="text-white" href="#link">
                Recently Added
              </Nav.Link>

              <Nav.Link className="text-white" href="#link">
                My List
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </div>
      <div id="latoDxNav" className="d-none d-lg-flex me-4">
        <i className="bi bi-search text-white me-4 fs-5 text"></i>
        <img
          className="me-4"
          src="../kids_icon.png"
          alt="Kids Icon"
          width="30px"
        />
        <i className="bi bi-bell-fill text-white me-4 fs-5 text"></i>
        <div
          id="imgProfiloNav"
          className="d-flex align-items-center"
          data-bs-toggle="collapse"
          data-bs-target="#profiloCollapse"
          aria-expanded="false"
        >
          <img
            src="../avatar.png"
            alt="Your Avatar Imaged"
            width="30px"
            className="me-1"
          />
          <i className="bi bi-caret-down-fill text-white me-4"></i>
        </div>
      </div>
    </Navbar>
  );
};
export default CostNav;
