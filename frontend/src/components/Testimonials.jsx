import React from "react";

export default function Testimonials() {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold  mb-32">
          Testimonials
        </h1>
        <div className="flex justify-center gap-8  flex-wrap">
          <div className="font-sans  relative  bg-customBlue px-4 pb-6 mb-16 lg:mb-0 bg-opacity-60 shadow-lg backdrop-blur-0 border-opacity-18 rounded-md border-1 border-white">
            <img
              src="/images/testimonials/avatar1.svg"
              alt="avatar1"
              className=" absolute left-28 top-[-70px]"
            />
            <h1 className="font-semibold  text-center mt-20 mb-12 text-3xl">
              Natasha
            </h1>
            <p className="text-center">
              “I am blown away by the quality <br /> of the computer accessories
              I purchased <br /> from Smart Tech Stores.
              <br /> Not only did they improve my <br />
              productivity, but they were also stylish <br /> and comfortable to
              use. <br />I highly recommend Smart Tech Stores <br /> to anyone
              looking for top-notch tech products."
            </p>
          </div>
          <div c className="font-sans  relative  bg-customBlue px-4 pb-6 mb-16 lg:mb-0 bg-opacity-60 shadow-lg backdrop-blur-0 border-opacity-18 rounded-md border-1 border-white">
            <img
              src="/images/testimonials/avatar1.svg"
              alt="avatar1"
              className=" absolute left-28 top-[-70px]"
            />
            <h1 className="font-semibold  text-center mt-20 mb-12 text-3xl">
              Ivy
            </h1>
            <p className="text-center">
              "The customer service
              <br /> at Smart Tech Stores is unmatched.
              <br /> I had a question about one of their products <br /> and
              their team was quick <br /> to respond and very helpful. <br />{" "}
              It's refreshing to see a company that truly cares <br /> about
              their customers."
            </p>
          </div>
          <div  className="font-sans  relative  bg-customBlue px-4 pb-6 mb-16 lg:mb-0 bg-opacity-60 shadow-lg backdrop-blur-0 border-opacity-18 rounded-md border-1 border-white">
            <img
              src="/images/testimonials/avatar2.svg"
              alt="avatar2"
              className=" absolute left-28 top-[-70px]"
            />
            <h1 className="font-semibold  text-center mt-20 mb-12 text-3xl">
              George
            </h1>
            <p className="text-center">
              "I was skeptical about buying computer <br /> accessories online,
              but Smart Tech Stores <br /> exceeded my expectations. Their
              website was
              <br /> easy to navigate, their prices were <br /> competitive, and
              my order arrived on time <br /> and in perfect condition. I will
              definitely be a <br /> repeat customer."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
