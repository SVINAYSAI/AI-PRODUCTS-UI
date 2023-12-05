import Header from "./HomePages/Header";
import WeCreate from "./HomePages/WeCreate";
import OurServices from "./HomePages/OurServices";
import OurTeam from "./HomePages/OurTeam";
import Awesome from "./HomePages/Awesome";
import OurBlog from "./HomePages/OurBlog";
import ContactUs from "./HomePages/ContactUs";
import Footer from "./HomePages/Footer";
import "../../components/vendors/themify-icons/css/themify-icons.css";
import "../../components/assets/css/creative-studio.css";
// import Chatbot from "../chatbot/chatbot"

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
        {/* <Chatbot/> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
