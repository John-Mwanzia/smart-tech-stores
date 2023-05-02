import React from "react";

export default function SignInPage() {
  return (
    <>
         <div class="container-signin">
        <h2>SignIn</h2>
        <form action="">
            <div class="user-box">
                <input type="text" name="" required=""/>
                <label for="">Username</label>
            </div>
            <div class="user-box">
                <input type="password" name="" required=""/>
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
    </>
  );
}
