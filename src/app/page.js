import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 text-center p-0">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  FRONTEND
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        aria-current="page"
                        href="#"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        href="https://getbootstrap.com/docs/5.3/components/buttons/#base-class"
                      >
                        about
                      </a>
                    </li>
                    <li className="nav-item service">
                      <a
                        className="nav-link"
                        href="https://getbootstrap.com/docs/5.3/layout/grid/"
                      >
                        service
                      </a>
                    </li>
                    <li className="nav-item contact">
                      <a
                        className="nav-link"
                        href="https://getbootstrap.com/docs/5.3/customize/color/"
                      >
                        contact
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex" role="login">
                    <button
                      className="btn btn-outline-success me-2"
                      type="submit"
                    >
                      SignUp
                    </button>
                    <button className="btn btn-outline-success" type="submit">
                      SignIn
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center p-0">
            <div id="carouselExample" className="carousel slide">
              <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      src="https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?cs=srgb&dl=pexels-vladalex94-1402787.jpg&fm=jpg"
                      class="d-block w-100"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg"
                      class="d-block w-100"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src="https://image.dogilike.com/shareimg/contentimg/2021/meaw/%E0%B9%80%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B8%A3%E0%B8%B9%E0%B9%89/29092021/iStock-953069774.jpg"
                      class="d-block w-100"
                      alt="Third slide"
                    />
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        ิ<br></br>
        <div className="row">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <img
                  src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
                  class="img-thumbnail"
                  alt="..."
                />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <img
                  src="https://i.imgur.com/5fQUPDl.jpg"
                  class="img-thumbnail"
                  alt="..."
                />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <img
                  src="https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg"
                  class="img-thumbnail"
                  alt="..."
                />
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-md-12 text-center bg-white p-5">
            <div className="container">
              <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className="col-md-4 mb-0 text-body-secondary">
                  © 2024 Company, Inc
                </p>
                <a
                  href="/"
                  className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
                >
                  <svg className="bi me-2" width={40} height={32}>
                    <use xlinkHref="#bootstrap" />
                  </svg>
                </a>
                <ul className="nav col-md-4 justify-content-end">
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link px-2 text-body-secondary">
                      About
                    </a>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
