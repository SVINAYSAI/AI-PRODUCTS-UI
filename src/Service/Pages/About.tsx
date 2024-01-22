import Img from "../assets/img/about/1.jpg";

export default function about() {
  return (
    <>
      <div id="about1" className="about1-area area-padding">
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="section-headline text-center">
                <h2 className="mb-4 mt-8">about eBusiness</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-left">
                <div className="single-well1">
                  <a href="#">
                    <img src={Img} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="well-middle">
                <div className="single-well1">
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
