import React from "react";

export default function SignInPage() {
  return (
    <> 
        <div className="signin-wrapper">
         <div class="container-signin  bg-black opacity-60 ">
        <h2 className="text-center">SignIn</h2>
        <form action="">
            <div class="user-box">
                <input type="Email" name="" required/>
                <label >Email</label>
            </div>
            <div class="user-box">
                <input type="password" name="" required/>
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
