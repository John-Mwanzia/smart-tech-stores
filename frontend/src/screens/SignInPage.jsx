import axios from "axios";
import React, { useContext, useState } from "react";
import { Store } from "../store";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword]= useState("");
 
  const navigate = useNavigate()
 //get redirect value from URL
  const {search} = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect")
  const redirect = redirectInUrl? redirectInUrl: "/"
  const {state, dispatch: ctxDispatch} = useContext(Store)

  const submitHandler = async(e) => {
    e.preventDefault();
    try { 
      //send  a post  request with email & passsword variables and deconstruct data from the response
      const { data } = await axios.post("http://localhost:3000/api/users/signin", {
        email,
        password,
      });
      ctxDispatch({type : 'USER_SIGNIN', payload: data});
      localStorage.setItem("userInfo", JSON.stringify(data));
      navigate(redirect || "/") 
     
     
    } catch (error) {
      alert("invalid email or password");
    } 
  };
  return (
    <> 
        <div className="signin-wrapper">
         <div className="container-signin  bg-black opacity-60 ">
        <h2 className="text-center">SignIn</h2>
        <form onSubmit={submitHandler}>
            <div className="user-box">
                <input type="Email" name="" required onChange={ (e) => setEmail(e.target.value)} />
                <label >Email</label>
            </div>
            <div className="user-box">
                <input type="password" name="" required  onChange={ (e) => setPassword(e.target.value)} />
                <label>Password</label>
            </div>
            <div className="button-wrapper" href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <button type="submit">
                  Submit
                </button>
               
               </div> 

            <h6 className="mt-4" >Don't have an account?
             <Link to= {`/signup?redirect=${redirect }`}>
                Sign up
            </Link> </h6>   
        </form>
    </div>
    </div>
    </>
  );
}
