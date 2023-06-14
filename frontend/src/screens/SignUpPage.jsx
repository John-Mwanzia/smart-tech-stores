import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Store } from "../store";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { useGoogleOneTapLogin } from "react-google-one-tap-login";

export default function SignUpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasssword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  //get redirect value from URL
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPasssword) {
      alert("passwords do not match");
      return;
    }

    const { data } = await axios.post(
      "https://smart-tech-server.onrender.com/api/users/signup",
      {
        name,
        email,
        password,
      }
    );
    ctxDispatch({ type: "USER_SIGNIN", payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
    navigate(redirect || "/");
  };

  const handleSuccess = async(response) => {

    try {
      const  {data}  = await axios.post("https://smart-tech-server.onrender.com/api/users/signup", {
        name: response.given_name,
        email: response.email,
        password: response.sub
      });
      console.log(data);
      ctxDispatch({ type: "USER_SIGNIN", payload: data});
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");

  }
  catch (error) {
    alert("unable to sign in");
  }
  };

  
  useGoogleOneTapLogin({
    onError: error => console.log(error),
    onSuccess: handleSuccess,
      
    googleAccountConfigs: {
      client_id: import.meta.env.VITE_GOOGLE_LOGIN_CLIENT_ID,
    },

  });

  return (
    <>
      <Helmet>
        <title>Sign Up</title>
        <meta name="description" content="Sign Up page" />
      </Helmet>
      <div className="signin-wrapper flex justify-center items-center h-[100vh]">
        <div className="container-signin  bg-black opacity-60 ">
          <h2 className="text-center mb-8">SignUp</h2>
          <form onSubmit={submitHandler}>
            <div className="user-box">
              <input
                type="text"
                name=""
                required
                onChange={(e) => setName(e.target.value)}
              />
              <label>Name</label>
            </div>
            <div className="user-box">
              <input
                type="Email"
                name=""
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Email</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name="confirmPassword"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label>Confirm Password</label>
            </div>
            <div className="button-wrapper" href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <button type="submit">Submit</button>
            </div>

            <h5>or</h5>

            <h6 className="mt-4 text-white">
              Already have an account?
              <Link
                className="ml-1 text-blue-500"
                to={`/signin?redirect=${redirect}`}
              >
                Sign in
              </Link>{" "}
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}
