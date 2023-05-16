import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="mt-4 bg-slate-800 ">
        <div className=" footer-wrapper flex flex-row ">
          
          <div className="text-center">
            <h2 className="text-center">Follow us</h2>
            <div className="icon-wrapper">
              <div>
                <Link to="/">
                  <img src="/images/facebook.png" width={40} height={40} />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src="/images/instagram.png" width={40} height={40} />
                </Link>
              </div>
              <div>
                <Link to="/">
                  <img src="/images/twitter.png" width={40} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
