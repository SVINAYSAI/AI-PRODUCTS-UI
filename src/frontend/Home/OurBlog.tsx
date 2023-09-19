import { Link } from "react-router-dom";
import img1 from "../../Components/assets/imgs/artificial-intelligence-AI.jpg";
import img2 from "../../Components/assets/imgs/vr.jpg";
import img3 from "../../Components/assets/imgs/ar.jpg";

export default function OurBlog() {
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <section id="blog">
          <div className="container">
            <h6 className="section-subtitle text-center">News Feeds</h6>
            <h6 className="section-title mb-6 text-center">Our Blog</h6>

            <div className="flex flex-wrap -mx-4">
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img src={img1} alt="" />
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="">
                        <i className="ti-comments"></i> 123
                      </Link>
                      <Link to="">
                        <i className="ti-eye"></i> 123
                      </Link>
                    </div>
                    <h5 className="card-title">Ai products</h5>
                    <p>
                      Leveraging AI, we offer innovative solutions like
                      converting text to images, videos, charts, and speech.
                      Additionally, we create personalized AI avatars and music
                      compositions, all generated directly from textual input.
                    </p>
                    <Link to="/blog" type="button" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src={img2}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="">
                        <i className="ti-comments"></i> 434
                      </Link>
                      <Link to="">
                        <i className="ti-eye"></i> 987
                      </Link>
                    </div>
                    <h5 className="card-title">Virtual Reality</h5>
                    <p>
                      We are revolutionizing Virtual Reality by automating the
                      gaming process with AI. Our cross-platform app is
                      compatible with VR, Windows, Linux, and Mac, offering
                      seamless, intelligent experiences for gamers.
                    </p>
                    <Link to="" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post my-4 my-sm-5 my-md-0">
                  <img
                    src={img3}
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Creative studio Landing page"
                  />
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="">
                        <i className="ti-comments"></i> 164
                      </Link>
                      <Link to="">
                        <i className="ti-eye"></i> 425
                      </Link>
                    </div>
                    <h5 className="card-title">Augmented Reality</h5>
                    <p>
                      We are at the forefront of Augmented Reality, developing
                      AI-powered software that enriches user experience. Our app
                      seamlessly integrates with AR platforms to deliver
                      intelligent, interactive functionalities.
                    </p>
                    <Link to="" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}
