import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer className="mt-4 bg-slate-800 ">
        <div className=" footer-wrapper flex flex-row ">
          <div>
            <h2 className="text-center">About us</h2>
            {/* <p className="max-w-max">
              Welcome to our web app! We are passionate about providing
              high-quality computer accessories and electronics to our
              customers. Our team consists of tech enthusiasts who understand
              the importance of having reliable and efficient devices that meet
              the demands of modern life. We are committed to providing a
              seamless and enjoyable shopping experience for our customers. From
              finding the perfect accessory to navigating through the checkout
              process, we are here to make sure your shopping journey is easy
              and hassle-free. Our product selection includes a wide range of
              computer accessories and electronics, from cables and chargers to
              headphones and speakers. We carefully curate our inventory to
              ensure that each product meets our high standards for quality and
              performance. At our web app, we value our customers above all
              else. We believe in building long-lasting relationships based on
              trust and mutual respect. If you have any questions or concerns,
              please don't hesitate to contact us. We are always here to help.
              Thank you for choosing our web app for your computer accessory and
              electronics needs. We look forward to serving you!
            </p> */}
            <div className="about-wapper">
              <Link style={{textDecoration: 'none', color: 'white'}} to="">
              <p>About smart-tech</p>
              </Link>
              <Link style={{textDecoration: 'none', color: 'white'}} to="">
              <p>Terms and conditions</p>
              </Link>
              <Link style={{textDecoration: 'none', color: 'white'}} to="">
              <p>privacy policy</p>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-center">Contact Us</h2>
            <div>
              <p>Phone: 123-456-7890</p>
              <p>
                Email :{" "}
                <a
                  href="mailto:
              smarttech29@gmail.com"
                >
                  smarttech29@gmail.com
                </a>
              </p>
              <p>Chat support</p>
            </div>
          </div>
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
      </footer>
    </div>
  );
}
