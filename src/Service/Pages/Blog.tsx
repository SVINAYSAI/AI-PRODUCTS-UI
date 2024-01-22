import Img1 from "../assets/img/blog/1.jpg";
import Img2 from "../assets/img/blog/2.jpg";
import Img3 from "../assets/img/blog/3.jpg";

export default function blog() {
  return (
    <>
      <div id="blog1" className="blog1-area">
        <div className="blog1-inner area-padding">
          <div className="blog1-overly"></div>
          <div className="container mt-6 mb-4">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Latest News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog1">
                  <div className="single-blog1-img">
                    <a href="blog1.html">
                      <img src={Img1} alt="" />
                    </a>
                  </div>
                  <div className="blog1-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">13 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog1-text">
                    <h4>
                      <a href="blog1.html">Assumenda repud eum veniam</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog1.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog1">
                  <div className="single-blog1-img">
                    <a href="blog1.html">
                      <img src={Img2} alt="" />
                    </a>
                  </div>
                  <div className="blog1-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">130 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog1-text">
                    <h4>
                      <a href="blog1.html">Explicabo magnam quibusdam.</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog1.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog1">
                  <div className="single-blog1-img">
                    <a href="blog1.html">
                      <img src={Img3} alt="" />
                    </a>
                  </div>
                  <div className="blog1-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">10 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog1-text">
                    <h4>
                      <a href="blog1.html">Lorem ipsum dolor sit amet</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog1.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
