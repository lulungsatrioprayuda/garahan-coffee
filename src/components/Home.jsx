import { Carousel } from "flowbite-react";
import React from "react";
import banner1 from "../assets/banner1.png";

const Home = () => {
  return (
    <div className="bg-neutralSilver ">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* text section */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Coffee Crafted to&nbsp;
                <span className="text-brandPrimary leading-snug">
                  Perfection
                </span>
              </h1>
              <p className="text-neturalGrey text-base mb-8">
                Are You Ready to Captivate Your Business with Us?
              </p>
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* text section */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Serving Perfection in Every Brew&nbsp;
                <span className="text-brandPrimary leading-snug">
                  Since 5 Years
                </span>
              </h1>
              <p className="text-neturalGrey text-base mb-8">
                Are You Ready to Captivate Your Business with Us?
              </p>
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src={banner1} alt="" />
            </div>
            {/* text section */}
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
                Your Destination for&nbsp;
                <span className="text-brandPrimary leading-snug">
                  Exceptional Coffee
                </span>
              </h1>
              <p className="text-neturalGrey text-base mb-8">
                Are You Ready to Captivate Your Business with Us?
              </p>
              <button className="btn-primary">Contact Us</button>
            </div>
          </div>
          {/*<div className="flex h-full items-center justify-center">Slide 2</div>
          <div className="flex h-full items-center justify-center">Slide 3</div>*/}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
