import { useState } from "react";
import { Link } from "react-router-dom";
import img from "../../Components/assets/imgs/artificial-intelligence-AI.jpg";
import img1 from "../../Components/assets/imgs/cat-larg2.jpg";
import img2 from "../../Components/assets/imgs/cat-larg3.jpg";
import img3 from "../../Components/assets/imgs/cat-larg4.jpg";
import img4 from "../../Components/assets/imgs/cat-larg5.jpg";
import img5 from "../../Components/assets/imgs/cat-larg6.jpg";
import img6 from "../../Components/assets/imgs/cat-larg7.jpg";
import img7 from "../../Components/assets/imgs/cat-larg8.jpg";
import img8 from "../../Components/assets/imgs/blog-cat1.jpg";
import img9 from "../../Components/assets/imgs/blog-cat2.jpg";
import img10 from "../../Components/assets/imgs/blog-cat3.jpg";
import img11 from "../../Components/assets/imgs/blog-cat4.jpg";
import Footer from "../Home/Footer";

const Blog = () => {
  const [isPopUpOpen, setPopUpOpen] = useState(false);
  const [popUpContent, setPopUpContent] = useState({
    imgSrc: "",
    content: "",
    title: "",
    date: "",
  });

  const posts = [
    {
      id: 1,
      imgSrc: img,
      title: "Text to Images",
      date: "09 November, 2018",
      content:
        "Leveraging AI, we offer innovative solutions like converting text to images, videos, charts, and speech. Additionally, we create personalized AI avatars and music compositions, all generated directly from textual input.",
    },
    {
      id: 2,
      imgSrc: img1,
      title: "Text to Charts",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 3,
      imgSrc: img2,
      title: "Text to Voice",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 4,
      imgSrc: img3,
      title: "Transcripts",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 5,
      imgSrc: img4,
      title: "Music Generation",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 6,
      imgSrc: img5,
      title: "Virtual reality for easy animation",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 7,
      imgSrc: img6,
      title: "Argument reality for apps operation",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 8,
      imgSrc: img7,
      title: "Digital marketing with fats",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
    {
      id: 9,
      imgSrc: img7,
      title: "IOT for Automate the World",
      date: "09 November, 2018",
      content:
        "When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.     When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality. the choices are versatile Assuming that you will goWhen you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.When you need your company to have a new website or if you venture on updating your old webpage with a new look and functionality.",
    },
  ];

  const handleReadMoreClick = (
    imgSrc: string,
    content: string,
    title: string,
    date: string
  ) => {
    setPopUpContent({ imgSrc, content, title, date });
    setPopUpOpen(true);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <>
      <div className="container">
        <div className="row my-4 my-lg-5">
          <div className="col-12 col-lg-8">
            <div className="row">
              {posts.map((post) => (
                <div className="col-12 col-sm-6 mb-4 wow fadeIn" key={post.id}>
                  <div
                    className="image-container translate-effect-right rounded-md"
                    style={{ width: "100%", height: "250px" }}
                  >
                    <Link to="">
                      <img
                        src={post.imgSrc}
                        alt=""
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        className="rounded-md"
                      />
                    </Link>
                  </div>
                  <div
                    className="title-container"
                    style={{ width: "100%", height: "70px" }}
                  >
                    <h3 className="mt-3 mb-2">
                      <Link
                        to=""
                        onClick={() =>
                          handleReadMoreClick(
                            post.imgSrc,
                            post.content,
                            post.title,
                            post.date
                          )
                        }
                      >
                        {post.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="">
                    <span className="mr-3"> {post.date} </span>
                    <Link to="" className="">
                      2
                    </Link>
                  </div>
                  <p className="text-left">
                    {post.content.length > 200
                      ? `${post.content.slice(0, 200)}...`
                      : post.content}
                  </p>
                  {post.content.length > 200 && (
                    <Link
                      to=""
                      onClick={() =>
                        handleReadMoreClick(
                          post.imgSrc,
                          post.content,
                          post.title,
                          post.date
                        )
                      }
                    >
                      Read More
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="fables-blog-search">
              <div className="container w-full p-[1%] relative flex">
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full pl-10 p-[3%] text-sm text-gray-900 border border-gray-300 rounded-l-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  required
                />
                <button
                  type="submit"
                  className="text-white bottom-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-md text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </div>

            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Categories
              </h2>
              <ul className="nav fables-blog-cat-list fables-forth-text-color fables-second-hover-color-link">
                <li>
                  <Link to="">Economy</Link>
                </li>
                <li>
                  <Link to="">Insights</Link>
                </li>
                <li>
                  <Link to="">Investing Strategy</Link>
                </li>
                <li>
                  <Link to="">Market</Link>
                </li>
                <li>
                  <Link to="">Politics Money</Link>
                </li>
                <li>
                  <Link to="">Retirement</Link>
                </li>
              </ul>
              {/* <hr> */}
            </div>

            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Recent Posts
              </h2>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img src={img8} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img src={img9} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img src={img10} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="row mb-4">
                <div className="col-4">
                  <Link to="">
                    <img src={img11} alt="" className="img-fluid" />
                  </Link>
                </div>
                <div className="col-8 pl-0">
                  <Link
                    to=""
                    className="fables-main-text-color bold-font fables-second-hover-color blog-smaller-head"
                  >
                    Getting to Another Level of Design
                  </Link>
                  <p className="fables-forth-text-color fables-blog-date-cat font-14 mt-1">
                    09 November, 2018
                  </p>
                </div>
              </div>
              <div className="text-right">
                <Link
                  to=""
                  className="btn fables-second-text-color underline fables-main-text-color font-14"
                >
                  {" "}
                  More
                </Link>
              </div>
              {/* <hr> */}
            </div>

            <div className="mt-4">
              <h2 className="position-relative font-23 semi-font fables-blog-category-head fables-main-text-color fables-second-before pl-3 mb-4">
                Tages
              </h2>
              <ul className="nav fables-blog-cat-list fables-forth-text-color fables-second-hover-color-link fables-blog-cat-tags">
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Online Services </Link>
                </li>
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Accountant</Link>
                </li>
                <li>
                  <Link to="">Online Services </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {isPopUpOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50"
          onClick={closePopUp}
        >
          <div className="bg-white p-4 max-w-3xl rounded-lg relative">
            <button
              onClick={closePopUp}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              Close
            </button>
            <div
              className="content-container mt-4"
              style={{ maxHeight: "70vh", overflowY: "auto" }}
            >
              <h2 className="text-3xl font-semibold mb-2 flex justify-center">
                {popUpContent.title}
              </h2>
              <div className="image-container flex justify-center">
                <img
                  src={popUpContent.imgSrc}
                  alt=""
                  className="w-[50%] rounded-md object-cover"
                />
              </div>
              <span className="block text-center my-2">
                {popUpContent.date}
              </span>
              <p className="mb-4">{popUpContent.content}</p>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Blog;
