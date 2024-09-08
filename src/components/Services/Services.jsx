import React from "react";
import Img2 from "../../assets/pictures/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Discover the essence of pure coffee perfection with our espresso.Crafted from the finest beans and expertly brewed, our espresso offers a rich, bold flavor with a velvety crema. Perfectly balanced and intensely aromatic, it’s the ideal foundation for your favorite coffee creations or a standout shot on its own.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Savor the smooth, rich taste of our Americano. Made by diluting a robust espresso shot with hot water, it delivers a full-bodied coffee experience with a lighter, more nuanced flavor. Ideal for those who enjoy a classic, straightforward cup with a satisfying depth.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Indulge in the perfect balance of espresso, steamed milk, and velvety microfoam with our cappuccino. This classic Italian favorite offers a rich, robust flavor topped with a creamy froth, creating a delightful harmony of bold coffee and smooth texture in every sip.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div data-aos='fade-up' className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;