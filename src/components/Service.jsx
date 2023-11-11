import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Creating New Job Opportunities",
      description:
        "Our employment generation system opens new prospects in Garahan Village, fostering economic growth and creating avenues for professional development, making the village a rapidly growing job hub.",
      image: "/src/assets/icons/membership1.png",
    },
    {
      id: 2,
      title: "Upholding the Reputation of Garahan Village",
      description:
        "Elevate the standing of Garahan Village with our initiatives, ensuring sustainable practices and community engagement that enhance the village's reputation",
      image: "/src/assets/icons/building1.png",
    },
    {
      id: 3,
      title: "Harnessing Raw Materials in the Village",
      description:
        "Utilize the abundant raw materials in the village with our resource management approach, adding value to local resources and promoting sustainable development.",
      image: "/src/assets/icons/hand1.png",
    },
  ];
  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          Our Distribution
        </h2>
        <p className="text-neturalGrey">
          Our premium coffee products are available at over 120 selected
          culinary spots, scattered across several enchanting districts in East
          Java.
        </p>
        {/* company logo */}
        <div className="my-12 flex flex-wrap justify-between items-center gap-3">
          <img
            src="/src/assets/icons/icon1.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
          <img
            src="/src/assets/icons/icon2.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
          <img
            src="/src/assets/icons/icon3.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
          <img
            src="/src/assets/icons/icon4.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
          <img
            src="/src/assets/icons/icon5.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
          <img
            src="/src/assets/icons/icon6.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
          <img
            src="/src/assets/icons/icon7.png"
            className="hover:scale-150 duration-150"
            alt=""
          />
        </div>
      </div>

      {/* service card */}
      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
          The purpose of creating this product is to make an impact by.
        </h2>
        <p className="text-neturalGrey">Below are the experienced impacts</p>
      </div>

      {/* card */}
      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-4 text-center md:w-[300px] mx-auto md:h-80 shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#dbfadd] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className="-ml-5 h-14 w-14" src={service.image} alt="" />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGrey mb2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neturalGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
