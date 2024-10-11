import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import { collection, addDoc, updateDoc, serverTimestamp } from "firebase/firestore";
import db from "..";
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import 'react-toastify/dist/ReactToastify.css';
import '../App.css';

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

      const successMessage = () => toast.success('Success! 🎉. Talk soon!', {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "light",
        className:"toast",
        });


    return (
    <>
    <div className="font-extrabold drop-shadow-lg font-gotham">
        <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-charcoal
                        lg:text-xl md:text-xl text-base">
            <h1>Contact</h1>
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
                  dirty,
       }) => (
        <form
        noValidate
        onSubmit={handleSubmit}
        className="lg:mr-0 md:mr-0">
                <div className="flex flex-col mb-2">
                    <label className="text-base text-charcoal mb-1
                    lg:text-base md:text-base text-sm">Your Name</label>
                    <input
                    value={values.name}
                    onChange={handleChange}
                    aria-label="enter your first name"
                    name="name"
                    className="lg:text-base md:text-base text-s p-2 rounded-md border-2 border-lightGreen
                    focus:outline-none focus:ring-none text-charcoal focus:border-4 focus:border-lightGreen"
                    placeholder="AJ"></input>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.name}</p>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base text-charcoal mb-1
                    lg:text-base md:text-base text-sm">Email</label>
                    <input
                    value={values.email}
                    onChange={handleChange}
                    aria-label="enter email address"
                    name="email"
                    className="lg:text-base md:text-base text-s p-2 rounded-md border-2 border-medGreen
                    focus:outline-none focus:ring-none text-charcoal focus:border-4 focus:border-medGreen"
                    placeholder="example@mail.com"
                    type="email"></input>
                    <p className="font-gotham text-formError text-sm">{errors.email}</p>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base text-charcoal mb-1
                    lg:text-base md:text-base text-sm">Message</label>
                    <textarea
                    value={values.message}
                    onChange={handleChange}
                    aria-label="enter your first name"
                    name="message"
                    className="lg:text-base md:text-base text-s p-2 rounded-md border-2 border-darkGreen
                    focus:outline-none focus:ring-none text-charcoal focus:border-4 focus:border-darkGreen"
                    placeholder="Want to write code for us?"></textarea>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.message}</p>
                </div>
                <button
                type="submit"
                disabled={!dirty || errors.email || errors.name || errors.message}
                onClick={successMessage}
                className="text-base lg:text-lg md:text-lg text-charcoal hover:text-lightGreen
                hover:translate-x-1 hover:cursor-pointer">Send <FontAwesomeIcon icon={faArrowRight} size="lg"/></button>
                <ToastContainer />
        </form>
        )}
        </Formik>
</div>
    </>
    );
}

export default Contact;