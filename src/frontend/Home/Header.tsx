import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <body data-spy="scroll" data-target=".navbar" data-offset="40" id="home">
        <header className="header">
          <div className="overlay">
            <h1 className="title font-italic pt-[5%]">FATS</h1>
            <h1 className="subtitle font-italic pt-4">
              FUTURE AI TECHNOLOGY'S
            </h1>
            <div className="buttons text-center pt-4 pb-4">
              <Link
                to="#service"
                className="btn btn-primary rounded w-lg btn-lg my-1"
              >
                Our Service
              </Link>
              <Link
                to="#contact"
                className="btn btn-outline-light rounded w-lg btn-lg my-1"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>

        <div className="box text-center shadow-lg ">
          <div className="box-item">
            <i className="ti-vector"></i>
            <h6 className="box-title">AI development</h6>
            <p>
              AI development involves creating algorithms that enable machines
              to perform tasks requiring human-like intelligence, such as
              learning and problem-solving.
            </p>
          </div>
          <div className="box-item">
            <i className="ti-filter"></i>
            <h6 className="box-title">Web Development</h6>
            <p>
              Web development encompasses designing, building, and maintaining
              websites, involving various technologies like HTML, CSS,
              JavaScript, and backend frameworks for functionality .
            </p>
          </div>
          <div className="box-item">
            <i className="ti-mobile"></i>
            <h6 className="box-title">App Design</h6>
            <p>
              App design is crafting user interfaces for mobile or desktop
              applications, focusing on aesthetics, usability, and user
              experience to enhance engagement.
            </p>
          </div>
        </div>
      </body>
    </>
  );
}
