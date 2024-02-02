import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import CostNav from "./components/CostNav";
import CostFooter from "./components/CostFooter";
import RowFilm from "./components/RowFilm";
import { Container } from "react-bootstrap";
import TitleRow from "./components/TitleRow";
import Genres from "./components/Genres";
import SettingsPage from "./components/SettingsPage";

//! NOTE
//* le card dei vari film, se ci si passa con il mouse sopra, appare il titolo, l'anno e la tipologia.
//* EXTRA 1 fatto - Error.jsx
//* per mancanza di tempo sono riuscito a fare come EXTRA 2 solo la pagina settings e non utente. Per utilizzarla scommentare "SettingsPage" e commentare tutto il container

function App() {
  return (
    <div className="App bg-black">
      <CostNav />
      {/* <SettingsPage /> */}
      <Container>
        <Genres />
        <TitleRow titleSectionRow="Harry Potter" />
        <RowFilm fetch="Harry Potter" />
        <TitleRow titleSectionRow="Lord Of Rings" />
        <RowFilm fetch="Lord of the Rings" />
        <TitleRow titleSectionRow="Hunger Games" />
        <RowFilm fetch="Hunger" />
      </Container>
      <CostFooter />
    </div>
  );
}

export default App;
