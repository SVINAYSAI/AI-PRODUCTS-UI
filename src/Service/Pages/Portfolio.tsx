import Img1 from "../assets/img/portfolio/1.jpg";
import Img2 from "../assets/img/portfolio/2.jpg";
import Img3 from "../assets/img/portfolio/3.jpg";
import Img4 from "../assets/img/portfolio/4.jpg";
import Img5 from "../assets/img/portfolio/5.jpg";
import Img6 from "../assets/img/portfolio/6.jpg";

export default function portfolio1() {
  return (
    <>
      <div id="portfolio1" className="portfolio1-area area-padding fix">
        <div className="container mt-12 mb-4">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2 className="mb-4">Our portfolio1</h2>
              </div>
            </div>
          </div>
          <div className="row wesome-project-1 fix">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <ul id="portfolio1-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-card">Card</li>
                <li data-filter=".filter-web">Web</li>
              </ul>
            </div>
          </div>

          <div className="row awesome-project-content portfolio1-container">
            <div className="col-md-4 col-sm-4 col-xs-12 portfolio1-item filter-app portfolio1-item">
              <div className="single-awesome-project">
                <div className="awesome-img">
                  <a href="#">
                    <img src={Img1} alt="" />
                  </a>
                  <div className="add-actions text-center">
                    <div className="project-dec">
                      <a
                        className="portfolio1-lightbox"
                        data-gallery="myGallery"
                        href="assets/img/portfolio1/1.jpg"
                      >
                        <h4>Business City</h4>
                        <span>Web Development</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12 portfolio1-item filter-web">
              <div className="single-awesome-project">
                <div className="awesome-img">
                  <a href="#">
                    <img src={Img2} alt="" />
                  </a>
                  <div className="add-actions text-center">
                    <div className="project-dec">
                      <a
                        className="portfolio1-lightbox"
                        data-gallery="myGallery"
                        href="assets/img/portfolio1/2.jpg"
                      >
                        <h4>Blue Sea</h4>
                        <span>Photosho</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12 portfolio1-item filter-card">
              <div className="single-awesome-project">
                <div className="awesome-img">
                  <a href="#">
                    <img src={Img3} alt="" />
                  </a>
                  <div className="add-actions text-center">
                    <div className="project-dec">
                      <a
                        className="portfolio1-lightbox"
                        data-gallery="myGallery"
                        href="assets/img/portfolio1/3.jpg"
                      >
                        <h4>Beautiful Nature</h4>
                        <span>Web Design</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12 portfolio1-item filter-web">
              <div className="single-awesome-project">
                <div className="awesome-img">
                  <a href="#">
                    <img src={Img4} alt="" />
                  </a>
                  <div className="add-actions text-center">
                    <div className="project-dec">
                      <a
                        className="portfolio1-lightbox"
                        data-gallery="myGallery"
                        href="assets/img/portfolio1/4.jpg"
                      >
                        <h4>Creative Team</h4>
                        <span>Web design</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12 portfolio1-item filter-app">
              <div className="single-awesome-project">
                <div className="awesome-img">
                  <a href="#">
                    <img src={Img5} alt="" />
                  </a>
                  <div className="add-actions text-center">
                    <div className="project-dec">
                      <a
                        className="portfolio1-lightbox"
                        data-gallery="myGallery"
                        href="assets/img/portfolio1/5.jpg"
                      >
                        <h4>Beautiful Flower</h4>
                        <span>Web Development</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-4 col-xs-12 portfolio1-item filter-web">
              <div className="single-awesome-project">
                <div className="awesome-img">
                  <a href="#">
                    <img src={Img6} alt="" />
                  </a>
                  <div className="add-actions text-center">
                    <div className="project-dec">
                      <a
                        className="portfolio1-lightbox"
                        data-gallery="myGallery"
                        href="assets/img/portfolio1/6.jpg"
                      >
                        <h4>Night Hill</h4>
                        <span>Photoshop</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
