import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Sarah",
    text: "The moment I walked into this cafe, I knew I found my new favorite spot. The coffee is exceptional, and the atmosphere is so inviting. It’s my go-to place for a morning pick-me-up!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Kavee Perera",
    text: "I can’t get enough of their lattes and fresh pastries. The staff is always friendly, and the cozy ambiance makes it the perfect place to unwind or catch up with friends.",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Teena Dias",
    text: "This cafe has quickly become a staple in my daily routine. The quality of their coffee is top-notch, and I love the creative seasonal drinks they offer. Highly recommend!",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 5,
    name: "Manu Diwya",
    text: "Every visit is a treat! The coffee is consistently delicious, and the warm, welcoming vibe makes it a great spot for both work and relaxation. A gem in the neighborhood!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Testimonials
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;