import { Component } from "react";
import { Row } from "react-bootstrap";
import SingleFilm from "./SingleFilm";
import Spinner from "react-bootstrap/Spinner";
import Error from "./Error";

class RowFilm extends Component {
  state = {
    films: [],
    loading: true,
    error: false,
    statoError: "",
    textError: "",
  };

  trovaFilm = () => {
    fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&s=${this.props.fetch}`)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        } else {
          throw (
            (new Error("Errore nella ricezione dati dal server"),
            this.setState({
              error: true,
              messageError: response.status || "Errore sconosciuto",
              textError: response.statusText || "Errore sconosciuto",
            }))
          );
        }
      })
      .then((filmFromServer) => {
        this.setState({
          loading: false,
        });
        console.log(filmFromServer);
        if (filmFromServer.Search) {
          this.setState({
            films: filmFromServer.Search,
          });
        } else {
          console.error("Campo 'Search' non presente nella risposta");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.trovaFilm();
  }

  render() {
    console.log(this.state);
    return this.state.error ? (
      <Row>
        <Error messageError={this.state.messageError} />
      </Row>
    ) : this.state.loading === true ? (
      <Row>
        <Spinner animation="grow" />
      </Row>
    ) : (
      <Row>
        {this.state.films.slice(0, 4).map((singleFilm) => {
          return (
            <SingleFilm
              key={singleFilm.imdbID}
              poster={singleFilm.Poster}
              title={singleFilm.Title}
              type={singleFilm.Type}
              year={singleFilm.Year}
            />
          );
        })}
      </Row>
    );
  }
}
export default RowFilm;
