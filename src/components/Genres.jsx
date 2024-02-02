import Dropdown from "react-bootstrap/Dropdown";

import ButtonGroup from "react-bootstrap/ButtonGroup";

const Genres = function () {
  return (
    <div className="d-flex justify-content-between align-items-center mt-5">
      <div id="titoloEDrop" class="d-flex align-items-center">
        <h3 className="me-4 fs-1 text-white">Tv Shows</h3>
        <Dropdown>
          <Dropdown.Toggle
            variant="outline-secondary"
            id="dropdown-basic"
            className="rounded-0 px-3"
          >
            Genres
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Anime</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Horror</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Fantasy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Crime</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div id="listOrGriglia">
        <ButtonGroup aria-label="Basic example">
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          />
          <label
            class="btn btn-outline-secondary rounded-0 px-3"
            for="btnradio1"
          >
            <i className="bi bi-list-nested"></i>
          </label>

          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          />
          <label
            className="btn btn-outline-secondary rounded-0 px-3"
            for="btnradio2"
          >
            <i className="bi bi-grid-fill"></i>
          </label>
        </ButtonGroup>
      </div>
    </div>
  );
};
export default Genres;
