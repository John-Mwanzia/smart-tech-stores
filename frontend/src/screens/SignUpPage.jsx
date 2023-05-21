import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Store } from '../store';

export default function SignUpPage() {

  //get redirect value from URL
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";
  const {state, dispatch:ctxDispatch} = useContext(Store)

    const submitHandler = async(e)=>{
        e.preventDefault();

        const {data} = await axios.post( "http://localhost:3000/api/users/signup", {
          name,
          email,
          password

        })
      ctxDispatch({type: "USER_SIGNUP", payload:data})

    }

  return (
    <>

<div className="signin-wrapper">
        <div className="container-signin  bg-black opacity-60 ">
          <h2 className="text-center">SignUp</h2>
          <form onSubmit={submitHandler}>

          <div className="user-box">
              <input
                type="text"
                name=""
                required
                onChange={(e) => setEmail(e.target.value)}
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
                name=""
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>
            <div className="user-box">
              <input
                type="password"
                name=""
                required
                onChange={(e) => setPassword(e.target.value)}
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
              <Link className='ml-1 text-blue-500' to={`/signin?redirect=${redirect}`}>Sign in</Link>{" "}
            </h6>
          </form>
        </div>
      </div>
      
    </>
  )
}
