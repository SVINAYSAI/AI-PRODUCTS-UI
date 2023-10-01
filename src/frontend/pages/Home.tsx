import Header from "../Home/Header";
import "../../components/assets/css/creative-studio.css";
import "../../components/assets/vendors/themify-icons/css/themify-icons.css";
import WeCreate from "../Home/WeCreate";
import OurServices from "../Home/OurServices";
import OurTeam from "../Home/OurTeam";
import Awesome from "../Home/Awesome";
import OurBlog from "../Home/OurBlog";
import ContactUs from "../Home/ContactUs";
import Footer from "../Home/Footer";
import Chatbot from "../chatbot/chatbot"

function App() {
  return (
    <>
      <Header />
      <main>
        <WeCreate />
        <OurServices />
        <OurTeam />
        <Awesome />
        <OurBlog />
        <ContactUs />
        <Chatbot/>
      </main>
      <Footer />
    </>
  );
}

export default App;
