import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { collection, addDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import db from "..";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

function Contact() {


    const contactSchema = Yup.object().shape({
        name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
        email: Yup.string().email('Please enter a valid email address').required('Required'),
        message: Yup.string()
        .min(5, 'Must be 5 characters or more')
        .max(140, 'Must be 140 characters or less, sorry!')
        .required('Required'),
      });

      const successMessage = () => toast("Thank you!");
      const [message, setMessage] = useState(false);


    return (
    <>
        <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream
                        text-2xl font-semibold">
            <h1>Drop Me a Line!</h1>
        </div>
        <Formik   initialValues={{
                    name:"",
                    email: "",
                    message:""}}
                  validationSchema={contactSchema}
                  onSubmit={async (values, actions ) => {
                    const docRef = await addDoc(collection(db, "messages"), {
                        message: {values}
                      });
                    console.log("New message written with ID: ", docRef.id);
                    // eslint-disable-next-line
                    const updateTimestamp = await updateDoc(docRef, {
                        timestamp: serverTimestamp()
                    });
                    actions.resetForm({
                        values: {
                            name:"",
                            email: "",
                            message:""
                        },
                    });
                }}
          >
                  {({
                  values,
                  errors,
                  handleChange,
                  handleSubmit,
                  isSubmitting,
       }) => (
        <form
        noValidate
        onSubmit={handleSubmit}
        className="font-gotham">
                <div className="flex flex-col mb-2">
                    <label className="text-base text-darkcream mb-1">Your Name</label>
                    <input
                    value={values.name}
                    onChange={handleChange}
                    aria-label="enter your first name"
                    name="name"
                    className="text-base p-1 rounded bg-groupHover
                    focus:outline-none focus:ring-none text-darkcream"
                    placeholder="Bobby McGee"></input>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.name}</p>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base text-darkcream mb-1">Email</label>
                    <input
                    value={values.email}
                    onChange={handleChange}
                    aria-label="enter email address"
                    name="email"
                    className="text-base p-1 rounded bg-groupHover
                    focus:outline-none focus:ring-none text-darkcream"
                    placeholder="janis@joplin.com"
                    type="email"></input>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.email}</p>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base text-darkcream mb-1">Message</label>
                    <textarea
                    value={values.message}
                    onChange={handleChange}
                    aria-label="enter your first name"
                    name="message"
                    className="text-base p-1 rounded bg-groupHover
                    focus:outline-none focus:ring-none text-darkcream"
                    placeholder="Want to write code for us?"></textarea>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.message}</p>
                </div>
                <button
                type="submit"
                disabled={isSubmitting}
                onClick={!errors ? successMessage :null}
                className="text-base text-turqoise hover:text-orange
                            font-semibold hover:translate-x-1">SEND</button>
                <ToastContainer />
        </form>
        )}
        </Formik>
    </>
    );
}

export default Contact;