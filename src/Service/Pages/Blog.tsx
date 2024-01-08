import Img1 from "../assets/img/blog/1.jpg";
import Img2 from "../assets/img/blog/2.jpg";
import Img3 from "../assets/img/blog/3.jpg";

export default function Blog() {
  return (
    <>
      <div id="blog" className="blog-area">
        <div className="blog-inner area-padding">
          <div className="blog-overly"></div>
          <div className="container ">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <div className="section-headline text-center">
                  <h2>Latest News</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="blog.html">
                      <img src={Img1} alt="" />
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">13 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="blog.html">Assumenda repud eum veniam</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="blog.html">
                      <img src={Img2} alt="" />
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">130 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="blog.html">Explicabo magnam quibusdam.</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" className="ready-btn">
                      Read more
                    </a>
                  </span>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-xs-12">
                <div className="single-blog">
                  <div className="single-blog-img">
                    <a href="blog.html">
                      <img src={Img3} alt="" />
                    </a>
                  </div>
                  <div className="blog-meta">
                    <span className="comments-type">
                      <i className="fa fa-comment-o"></i>
                      <a href="#">10 comments</a>
                    </span>
                    <span className="date-type">
                      <i className="fa fa-calendar"></i>2016-03-05 / 09:10:16
                    </span>
                  </div>
                  <div className="blog-text">
                    <h4>
                      <a href="blog.html">Lorem ipsum dolor sit amet</a>
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet conse adipis elit Assumenda
                      repud eum veniam optio modi sit explicabo nisi magnam
                      quibusdam.sit amet conse adipis elit Assumenda repud eum
                      veniam optio modi sit explicabo nisi magnam quibusdam.
                    </p>
                  </div>
                  <span>
                    <a href="blog.html" className="ready-btn">
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
