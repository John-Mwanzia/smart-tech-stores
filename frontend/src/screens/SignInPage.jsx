import axios from "axios";
import React, { useContext, useState } from "react";
import { Store } from "../store";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useGoogleOneTapLogin } from 'react-google-one-tap-login';
import { Helmet } from "react-helmet-async";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  //get redirect value from URL
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //send  a post  request with email & passsword variables and deconstruct data from the response
      const { data } = await axios.post(
        "https://smart-tech-server.onrender.com/api/users/signin",
        {
          email,
          password,
        }
      );
      ctxDispatch({ type: "USER_SIGNIN", payload: data });
      // console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/");
    } catch (error) {
      alert("invalid email or password");
    }
  };

  const handleSuccess = async(response) => {

    try {
      const  {data}  = await axios.post("https://smart-tech-server.onrender.com/api/users/signin", {
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
        <title>Sign In</title>
        <meta name="description" content="Sign In" />
      </Helmet>
      <div className="signin-wrapper flex justify-center items-center h-[100vh]">
        <div className="container-signin  bg-black opacity-60 ">
          <h2 className="text-center mb-8">SignIn</h2>
          <form onSubmit={submitHandler}>
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
                name=""
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
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
              Don't have an account?
              <Link className="text-blue-500  ml-1" to={`/signup?redirect=${redirect}`}>Sign up</Link>{" "}
            </h6>
          </form>
        </div>
      </div>
    </>
  );
}
