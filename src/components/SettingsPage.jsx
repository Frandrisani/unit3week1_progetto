import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SettingsPage = function () {
  return (
    <Container className=" mt-5 mb-5 bg-white">
      <Row>
        <Col>
          <h3 className="text fs-1 mb-1">Account</h3>
        </Col>
        <hr className="text text-black my-4" />
      </Row>

      <Row>
        <Col md={4}>
          <p className="text-secondary fs-4 fw-semibold">
            MEMBERSHIP & BILLING
          </p>
          <button className="btn btn-light rounded-0 px-4 py-2 shadow">
            Cancel Membership
          </button>
        </Col>
        <Col md={8}>
          <div className="d-flex justify-content-between">
            <div>
              <p>student@strive.school</p>
              <p>Password: ********</p>
              <p>Phone: 321 044 1279</p>
            </div>
            <div className="d-flex flex-column align-items-end">
              <a href="#link" className="mb-3">
                Change account email
              </a>
              <a href="#link" className="mb-3">
                Change password
              </a>
              <a href="#link">Change phone number</a>
            </div>
          </div>
          <hr className="text text-black my-4" />
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <i className="bi bi-paypal me-3"> PayPal</i>
              <p>admin@strive.school</p>
            </div>
            <div className="d-flex flex-column align-items-end">
              <a href="#link" className="mb-3">
                Uptade payment info
              </a>
              <a href="#link">Billing details</a>
            </div>
          </div>
          <hr className="text text-black my-4" />
          <div className="d-flex flex-row-reverse">
            <div className="d-flex flex-column align-items-end">
              <a href="#link" className="mb-3">
                Redeem gift card or promo code
              </a>
              <a href="#link">Where to boy gift cards</a>
            </div>
          </div>
        </Col>
        <hr className="text text-black my-4" />
      </Row>
      <Row>
        <Col md={4}>
          <p className="text-secondary fs-4 fw-semibold">PLAN DETAILS</p>
        </Col>
        <Col md={4}>
          <div className="d-flex">
            <p className="me-3">Premium</p>
            <p>
              ULTRA <span className="fw-semibold">HD</span>
            </p>
          </div>
        </Col>
        <Col md={4} className="d-flex flex-row-reverse">
          <a href="#link">Change plan</a>
        </Col>
        <hr className="text text-black my-4" />
      </Row>
      <Row>
        <Col md={4}>
          <p className="text-secondary fs-4 fw-semibold">SETTING</p>
        </Col>

        <Col md={4} className=" d-flex flex-column">
          <a href="#link" className="mb-2">
            Parental controls
          </a>
          <a href="#link" className="mb-2">
            Test partecipation
          </a>
          <a href="#link" className="mb-2">
            Manage download device
          </a>
          <a href="#link" className="mb-2">
            Activate a device
          </a>
          <a href="#link" className="mb-2">
            Recent device straming activity
          </a>
          <a href="#link" className="mb-2">
            Sign out of all devices
          </a>
        </Col>
        <hr className="text text-black my-4" />
      </Row>
      <Row>
        <Col>
          <p className="text-secondary fs-4 fw-semibold">MY PROFILE</p>
        </Col>
        <Col>
          <a
            href="Profile.html"
            className="text-decoration-none text text-secondary"
          >
            <div className="d-flex align-items-center mb-2">
              <img
                src="./Netflix-assets/assets/avatar.png"
                alt="Yocurc Avatar"
                width="30px"
                className="me-2"
              />
              <p>Profile Settings</p>
            </div>
          </a>
          <div className="d-flex flex-column">
            <a href="#link">Language</a>
            <a href="#link">Playback settings</a>
            <a href="#link">Subtitle appearance</a>
          </div>
        </Col>
        <Col>
          <a href="#link">Viewing activity</a>
          <a href="#link">Ratings</a>
        </Col>
        <Col>
          <a href="#link">Manage profiles</a>
          <a href="#link">Add profile email</a>
        </Col>
      </Row>
    </Container>
  );
};
export default SettingsPage;
