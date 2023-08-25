import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../index.js";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from "formik";
import * as Yup from 'yup';

const Login = () => {

  const adminSchema = Yup.object().shape({
    email: Yup.string().matches(/abmarcinek@gmail.com/, "Not an admin, sorry! Contact for permission.")
    .required("Required"),
    password: Yup.string().required("Required"),
  });

  return (
        <>
        <div className="bg-background h-screen
              font-gotham text-orange px-12 py-12">
        <Formik   initialValues={{
                    email: "",
                    password: ""}}
                  validationSchema={adminSchema}
                  onSubmit={async (values) => {
                    signInWithEmailAndPassword(auth, values.email, values.password)
                    .then((userCredential) => {
                        // Signed in
                        const user = userCredential.user;
                        localStorage.setItem('AJadminEmail', values.email);
                        window.location.reload();
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        console.log(errorCode, errorMessage)
                    });
                }}
          >
                  {({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  dirty,
       }) => (
        <form
        noValidate
        onSubmit={handleSubmit}
        className="font-gotham">
                <div className="flex flex-col mb-2">
                    <label className="text-base mb-1
                    lg:text-base md:text-base text-sm text-darkcream">Admin Email</label>
                    <input
                    value={values.email}
                    onChange={handleChange}
                    aria-label="enter your email"
                    name="email"
                    className="lg:text-base md:text-base text-sm
                    px-2 py-1 rounded bg-groupHover
                    border-2 border-turqoise focus:outline-none focus:border-4
                    text-darkcream w-64"></input>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.email}</p>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base mb-1
                    lg:text-base md:text-base text-sm text-darkcream">Admin Password</label>
                    <input
                    value={values.password}
                    onChange={handleChange}
                    aria-label="enter password"
                    name="password"
                    className="lg:text-base md:text-base text-sm
                    px-2 py-1 rounded bg-groupHover border-2 border-turqoise
                    focus:outline-none focus:border-4 text-darkcream w-64"
                    type="password"></input>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.password}</p>
                </div>
                <button
                type="submit"
                disabled={!dirty || errors.email || errors.password}
                className="text-base hover:text-turqoise
                            font-semibold mb-4">Login</button>
                <div>
                <Link to="/"
                className="font-gotham text-orange
                hover:text-turqoise text-sm">Go To Home Page</Link>
                </div>
        </form>
        )}
        </Formik>
        </div>
        </>
    )
  }


export default Login;
/*  e.preventDefault();
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
  });*/

