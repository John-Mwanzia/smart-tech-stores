import React, { useState } from "react";

export default function SignInPage() {
  const {email, setEmail} = useState("")
  const {password, setPassword}= useState();

  const submitHandler = (e)=>{
    e.preventDefault()
  }
  return (
    <> 
        <div className="signin-wrapper">
         <div class="container-signin  bg-black opacity-60 ">
        <h2 className="text-center">SignIn</h2>
        <form onSubmit={submitHandler}>
            <div class="user-box">
                <input type="Email" name="" required onChange={ e => setEmail(e.target.value)} />
                <label >Email</label>
            </div>
            <div class="user-box">
                <input type="password" name="" required  onChange={ e => setPassword(e.target.value)} />
                <label for="">Password</label>
            </div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
               </a> 
        </form>
    </div>
    </div>
    </>
  );
}
