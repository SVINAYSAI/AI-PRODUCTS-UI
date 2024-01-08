import Img from "../assets/img/about/1.jpg";

export default function About() {
  return (
    <>
      <div id="about" className="about-area area-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2>About eBusiness</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-left">
                <div className="single-well">
                  <a href="#">
                    <img src={Img} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-middle">
                <div className="single-well">
                  <a href="#">
                    <h4 className="sec-head">project Maintenance</h4>
                  </a>
                  <p>
                    Redug Lagre dolor sit amet, consectetur adipisicing elit.
                    Itaque quas officiis iure aspernatur sit adipisci quaerat
                    unde at nequeRedug Lagre dolor sit amet, consectetur
                    adipisicing elit. Itaque quas officiis iure
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check"></i> Interior design Package
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Building House
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Reparing of Residentail
                      Roof
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Renovaion of Commercial
                      Office
                    </li>
                    <li>
                      <i className="bi bi-check"></i> Make Quality Products
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
