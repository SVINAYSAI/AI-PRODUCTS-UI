import Footer from "./HomePages/Footer";
import OurServices from "./HomePages/ContactUs";

export default function ourServices() {
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">

        <div className="container">
          <div className="row overflow-hidden">
            <div className="col-12 col-md-10 offset-md-1 mt-5">
              <div className="mt-0 mb-5 my-md-5">
                <h3 className="font-35 font-weight-bold fables-main-text-color text-center">
                  Contact Us
                </h3>
                <p className="mt-3 fables-forth-text-color  text-center">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

       <OurServices/>
      </body>

      <Footer />
    </>
  );
}
