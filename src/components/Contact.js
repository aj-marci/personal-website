import React from "react";

function Contact() {
    return (
    <>
        <div className="lg:mt-24 md:mt-20 mt-8 mb-2 font-gotham text-lightcream
                        text-2xl font-semibold">
            <h1>Drop Me a Line!</h1>
        </div>
        <form noValidate className="font-gotham">
                <div className="flex flex-col mb-2">
                    <label className="text-base text-darkcream mb-1">Your Name</label>
                    <input
                    className="text-base p-1 rounded bg-groupHover text-lightcream"
                    placeholder="Bobby McGee"></input>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base text-darkcream mb-1">Email</label>
                    <input
                    className="text-base p-1 rounded bg-groupHover text-lightcream"
                    placeholder="janis@joplin.com"
                    type="email"></input>
                </div>
                <div className="flex flex-col mb-2">
                    <label className="text-base text-darkcream mb-1">Message</label>
                    <textarea
                    className="text-base p-1 rounded bg-groupHover text-lightcream"
                    placeholder="Want to write code for us?"></textarea>
                </div>
                <button className="text-base text-turqoise hover:text-orange
                            font-semibold">SEND</button>
        </form>
    </>
    );
}

export default Contact;