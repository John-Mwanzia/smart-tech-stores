import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="mt-28 bg-customGray rounded-t-3xl">
        <h1 className="text-4xl font-sans text-center lg:text-left  lg:ml-[273px] font-semibold mb-4 pt-4 ">
          Get in Touch
        </h1>

        <div className="flex justify-center flex-wrap gap-36 mt-6 mb-16">
          <div>
            <div className="mb-24">
              <img src="/images/Logo.svg" alt="logo" />
            </div>
            <div className="mb-16">
              <p className="text-center">
                Smart Tech , Kinuthia avenue <br />
                Street 567, Nairobi, Kenya
              </p>
            </div>
            <div>
              <p className="text-center">smarttech29@gmail.com</p>
              <p className="text-center">0712345678</p>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-sans text-center font-semibold  mb-12">
              About Us
            </h1>
            <div className="flex flex-col gap-4">
              <Link to="/">
                <p className="text-center">About Us</p>
              </Link>
              <Link to="/">
                <p className="text-center">Blog</p>
              </Link>
              <Link to="/">
                <p className="text-center">Terms and conditions</p>
              </Link>
              <Link to="/">
                <p className="text-center">Privacy Policy</p>
              </Link>
              <Link to="/">
                <p className="text-center">Features</p>
              </Link>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-sans text-center  font-semibold  mb-12">
              help
            </h1>
            <div className="flex flex-col gap-4">
              <Link to="/Support">
                <p className="text-center">Support</p>
              </Link>
              <Link to="/signup">
                <p className="text-center">Sign up</p>
              </Link>
              <Link to="/Q & A">
                <p className="text-center">Q & A</p>
              </Link>
              <Link to="/Chat-support">
                <p className="text-center">Chat support</p>
              </Link>
            </div>
          </div>

          <div>
            <div>
              <h1 className="text-2xl font-sans text-center  font-semibold mb-8">
                Social Media
              </h1>
              <div className="flex gap-6">
                <div>
                  <Link to="/">
                    <img src="/images/footer/facebook.png" width={40} height={40} alt="facebook image"/>
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src="/images/footer/instagram.png" width={40} height={40} alt="instagram image" />
                  </Link>
                </div>
                <div>
                  <Link to="/">
                    <img src="/images/footer/twitter.png" width={40} height={40} alt="twitter img" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pb-8">
            <img src="/images/footer/copyRight.svg" alt="copyRight" width={40} height={40} />
             <p>2023 Smart Tech. All rights reserved</p>
        </div>
      </div>
    </>
  );
}
