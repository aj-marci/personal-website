import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../index.js";
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
const [password, setPassword] = useState("");

const onLogin = (e) => {
  e.preventDefault();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      localStorage.setItem('AJadminEmail', email);
      window.location.reload();
  })
  .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Not an Admin, sorry! Contact for permission.")
      console.log(errorCode, errorMessage)
  });

}
  return (
        <>
        <div className="flex flex-row justify-center bg-background h-screen
              font-gotham text-orange py-24">
        <form onSubmit={onLogin}>
          <div>
          <p>Email</p>
          <input className="bg-background border-2 border-turqoise
                focus:outline-none focus:border-4 rounded
                mb-4 text-sm py-0.5 px-2"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value)}}/>
          </div>
          <div>
            <p>Password</p>
            <input className="bg-background border-2 border-turqoise
                focus:outline-none focus:border-4 rounded
                mb-4 text-sm py-0.5 px-2"
                  type="password"
                  onChange={(e )=> {
                    setPassword(e.target.value)}}/>
          </div>
          <div className="ml-12">
          <button className="hover:text-turqoise rounded
                border-2 border-orange px-4 py-2 hover:border-turqoise"
                type="submit">Login</button>
          </div>
        </form>
        </div>
        </>
    )
  }


export default Login;