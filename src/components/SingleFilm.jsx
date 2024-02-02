import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Component } from "react";

class SingleFilm extends Component {
  state = {
    showCard: false,
  };

  render() {
    return (
      <Col
        sm={6}
        md={4}
        lg={3}
        onMouseEnter={() =>
          this.setState({
            showCard: true,
          })
        }
        onMouseLeave={() =>
          this.setState({
            showCard: false,
          })
        }
      >
        {this.state.showCard ? (
          <Card className="bg-dark">
            <Card.Img
              variant="top"
              src={this.props.poster}
              alt={this.props.title}
              height={300}
            />
            <Card.Body>
              <Card.Title className="fs-5 text-start mt-0 text-white">
                {this.props.title}
              </Card.Title>
              <div className="d-flex justify-content-between align-content-center">
                <div className="d-flex">
                  <Card.Text className="fs-6 text-white">
                    {this.props.year}
                  </Card.Text>
                  <i class="bi bi-slash text-white"></i>
                  <Card.Text className="fs-6 text-white">
                    {this.props.type}
                  </Card.Text>
                </div>
                <i className="bi bi-play-circle-fill text-white fs-1"></i>
              </div>
            </Card.Body>
          </Card>
        ) : (
          <img
            src={this.props.poster}
            alt={this.props.title}
            className="img-fluid"
          />
        )}
      </Col>
    );
  }
}
export default SingleFilm;
