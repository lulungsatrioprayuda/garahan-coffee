import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Creating New Job Opportunities",
      description:
        " Our employment generation system opens new prospects in Garahan Village, fostering economic growth and creating avenues for professional development, making the village a rapidly growing job hub.",
      image: "/src/assets/",
      id: 2,
      title: "Upholding the Reputation of Garahan Village",
      description:
        " Elevate the standing of Garahan Village with our initiatives, ensuring sustainable practices and community engagement that enhance the village's reputation",
      id: 3,
      title: "Harnessing Raw Materials in the Village",
      description:
        " Utilize the abundant raw materials in the village with our resource management approach, adding value to local resources and promoting sustainable development.",
      image: "/src/assets/",
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
    </div>
  );
};

export default Service;
