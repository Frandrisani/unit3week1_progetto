const CostFooter = function () {
  return (
    <footer className="pt-5 bg-black">
      <div className="container w-50">
        <div className="row">
          <div className="col mb-4">
            <a href="#link">
              <i className="bi bi-facebook fs-3 text me-3 text-secondary-emphasis"></i>
            </a>
            <a href="#link">
              <i className="bi bi-instagram fs-3 text me-3 text-secondary-emphasis"></i>
            </a>
            <a href="#link">
              <i className="bi bi-twitter-x fs-3 text me-3 text-secondary-emphasis"></i>
            </a>
            <a href="#link">
              <i className="bi bi-youtube fs-3 text me-3 text-secondary-emphasis"></i>
            </a>
          </div>
          <div className="row mb-4">
            <div className="col d-flex flex-column">
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Audio and subtitles
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Media Center
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Privacy
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Contact Us
              </a>
            </div>
            <div className="col d-flex flex-column">
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Audio Description
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Investor Relations
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Legal Notices
              </a>
            </div>
            <div className="col d-flex flex-column">
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Help Center
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Jobs
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Cookie Preferences
              </a>
            </div>
            <div className="col d-flex flex-column">
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Gift Cards
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Terms of Use
              </a>
              <a
                href="#link"
                className="text-decoration-none text-secondary-emphasis"
              >
                Corporate Information
              </a>
            </div>
          </div>
          <div className="row mb-4">
            <div className="col">
              <button
                type="button"
                className="btn btn-outline-secondary rounded-0"
              >
                Service Code
              </button>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p id="copyright"></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default CostFooter;
