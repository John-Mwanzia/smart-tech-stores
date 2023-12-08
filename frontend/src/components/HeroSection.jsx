import React from "react";
import Slider from "./Slider";

export default function HeroSection() {
  return (
    <div>
      <div className="bg-customGreen pb-4 pt-40">
        <div className=" absolute text-center left-8 top-36 md:left-[250px] lg:left-[730px] lg:top-28 xl:left-[470px] xl:top-36  2xl:left-[730px]">
          <label htmlFor="category-select">Select a category:</label>
          <select
            id="category-select"
            className="bg-transparent border border-gray-300 rounded-md px-4 py-2"
            name="category"
            onChange={(e) => {
              const selectedCategory = e.target.value;
              window.location.href = `/search?category=${selectedCategory}`;
            }}
          >
            <option value="laptops">Laptops</option>
            <option value="phones">Phones</option>
            <option value="chargers">Chargers</option>
            <option value="other-electronics">Other Electronics</option>
          </select>
        </div>

        <div className="flex justify-center gap-24 md:gap-8 lg:gap-24 flex-col md:flex-row xl:px-12">
          <div>
            <div>
              <h1 className="font-sans font-bold text-3xl px-4  lg:px-0 lg:text-5xl ">
                Upgrade Your Tech with <br /> Our High-Quality <br />{" "}
                Accessories
              </h1>
            </div>
            <div className="mt-16 md:mt-8 font-sans px-3 lg:px-0">
              <p>
                Discover a wide range of computer accessories to elevate your
                tech experience.
                {/* <br /> From keyboards and mice to monitors and headsets, our
                e-commerce platform <br />
                has everything you need to take your computer setup to the next
                level.  */}
                With our <br /> user-friendly interface and seamless
                checkout process, shopping for tech has <br />
                never been easier.
              </p>
            </div>

            <div className="pl-3 lg:pl-0">
              <button className="bg-[#FB9678] hover:bg-[#FB9678]/80 shadow-lg text-white  py-2 px-8 mt-8 rounded-xl">
                Shop Now
              </button>
            </div>
          </div>
          <div className="px-4">
            <Slider />
          </div>
        </div>
      </div>
    </div>
  );
}
