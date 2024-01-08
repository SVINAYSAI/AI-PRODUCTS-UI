import Header from "./Pages/Header";
import About from "./Pages/About";
import Ourservices from "./Pages/Ourservices";
import OurTeam from "./Pages/OurTeam";
import Rviews from "./Pages/Rviews";
import Portfolio from "./Pages/Portfolio";
import Testimonials from "./Pages/Testimonials";
import Blog from "./Pages/Blog";
import Suscribe from "./Pages/Suscribe";
import ContactUS from "./Pages/ContactUS";

import "./assets/css/style.css";
import "animate.css/animate.css";
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "boxicons";
import "glightbox/dist/js/glightbox.min.js";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";

export default function Service() {
  return (
    <>
      <Header />
      <About />
      <Ourservices />
      <OurTeam />
      <Rviews />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Suscribe />
      <ContactUS />
    </>
  );
}
