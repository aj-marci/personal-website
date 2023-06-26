import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';

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
                  onSubmit={(values, actions ) => {
                    console.log(values);
                    alert("Thanks!");
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
                    isInvalid={errors.name}
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
                    isInvalid={errors.email}
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
                    isInvalid={errors.message}
                    aria-label="enter your first name"
                    name="message"
                    className="text-base p-1 rounded bg-groupHover
                    focus:outline-none focus:ring-none text-darkcream"
                    placeholder="Want to write code for us?"></textarea>
                    <p className="font-gotham text-formError
                        font-semibold text-sm">{errors.message}</p>
                </div>
                <button
                disabled={isSubmitting}
                className="text-base text-turqoise hover:text-orange
                            font-semibold hover:translate-x-1">SEND</button>
        </form>
        )}
        </Formik>
    </>
    );
}

export default Contact;