import { Link } from "react-router-dom";

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
                <div className="card blog-post shadow-md my-4 my-sm-5 my-md-0">
                  <Link to="/blog" className="shadow-md">
                    <img
                      src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/artificial-intelligence-AI.jpg"
                      alt=""
                      style={{ width: "90%", height: "191px" }}
                    />
                  </Link>
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="/blog">
                        <i className="ti-comments"></i> 123
                      </Link>
                      <Link to="/blog">
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
                <div className="card blog-post shadow-md my-4 my-sm-5 my-md-0">
                  <Link to="/blog" className="shadow-md">
                    <img
                      src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/vr.jpg"
                      alt=""
                    />
                  </Link>
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="/blog">
                        <i className="ti-comments"></i> 434
                      </Link>
                      <Link to="/blog">
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
                    <Link to="/blog" className="d-block mt-3">
                      Read More...
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-4">
                <div className="card blog-post shadow-md my-4 my-sm-5 my-md-0">
                  <Link to="/blog" className="shadow-md">
                    <img
                      src="http://195.35.22.190/virtual_directory/ui_images/components/assets/imgs/ar.jpg"
                      alt=""
                    />
                  </Link>
                  <div className="card-body">
                    <div className="details mb-3">
                      <Link to="/blog">
                        <i className="ti-comments"></i> 164
                      </Link>
                      <Link to="/blog">
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
                    <Link to="/blog" className="d-block mt-3">
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
