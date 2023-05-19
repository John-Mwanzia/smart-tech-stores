import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function SignUpPage() {

  //get redirect value from URL
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
    const submitHandler = async(e)=>{
        e.preventDefault();
    }

  return (
    <>

<div className="signin-wrapper">
        <div className="container-signin  bg-black opacity-60 ">
          <h2 className="text-center">SignIn</h2>
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
             Already have an account?
              <Link to={`/signin?redirect=${redirect}`}>Sign in</Link>{" "}
            </h6>
          </form>
        </div>
      </div>
      
    </>
  )
}
