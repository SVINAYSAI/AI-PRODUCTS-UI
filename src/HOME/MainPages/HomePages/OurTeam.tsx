import React, { useState } from "react";

interface ImageSliderProps {
  data: Array<{ id: number; imgUrl: string; desc: string; name: string }>;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  return (
    <div className="relative p-2">
      <div className=" justify-self-center grid grid-cols-3 gap-4">
        {data.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div key={item.id} className="w-full">
            <div className="border border-gray-300 shadow-md rounded-md p-4">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="w-full h-64 object-cover rounded-md"
              />
              <p className="text-gray-600 mt-2">{item.desc}</p>
              <p className="font-bold mt-2">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="absolute pt-[2%] left-0 right-0 flex justify-center">
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={prevSlide}
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded-md shadow-md"
          >
            Previous
          </button>
          <button
            onClick={nextSlide}
            className="bg-blue-500 text-white px-4 py-2 m-2 rounded-md shadow-md"
          >
            Next
          </button>
        </div>
      </div> */}
    </div>
  );
};

const Slider: React.FC = () => {
  const data = [
    {
      id: 1,
      imgUrl: "https://photos.google.com/photo/AF1QipMo2gRv4HKqWgopb60ve0nzL__j1TCtDltp9nt0",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "EXPLORE NATURE",
    },
    {
      id: 2,
      imgUrl:
        "https://i.postimg.cc/bw6KxhLf/pexels-eberhard-grossgasteiger-1062249.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "EXPLORE NATURE",
    },
    {
      id: 3,
      imgUrl:
        "https://i.postimg.cc/CMkTW9Mb/pexels-eberhard-grossgasteiger-572897.jpg",
      desc: "Some beautiful roads cannot be discovered without getting lost.",
      name: "EXPLORE NATURE",
    },
    // {
    //   id: 4,
    //   imgUrl: "https://i.postimg.cc/NGW3329f/1069239.png",
    //   desc: "Some beautiful roads cannot be discovered without getting lost.",
    //   name: "EXPLORE NATURE",
    // },
    // {
    //   id: 5,
    //   imgUrl: "https://i.postimg.cc/6qdkn4bM/pexels-joyston-judah-933054.jpg",
    //   desc: "Some beautiful roads cannot be discovered without getting lost.",
    //   name: "EXPLORE NATURE",
    // },
    // {
    //   id: 6,
    //   imgUrl:
    //     "https://i.postimg.cc/RVm59Gqy/pexels-roberto-nickson-2559941.jpg",
    //   desc: "Some beautiful roads cannot be discovered without getting lost.",
    //   name: "EXPLORE NATURE",
    // },
  ];

  return (
    <div className="container mx-auto">
      <div className="fables-team">
        <div className="row wow fadeInDown">
          <div className="col-12 text-center mt- mt-md-5">
            <h3 className="fables-about-top-head fables-forth-text-color font-15 semi-font d-inline-block bg-white position-relative">
              <span className="mx-4">Team</span>
            </h3>
            <h2 className="fables-second-text-color mt-3 font-30 font-weight-bold text-center">
              Meet The Team
            </h2>
          </div>
          <ImageSlider data={data} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
