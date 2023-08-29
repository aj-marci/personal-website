import { useState } from "react";
import Login from "./adminLogin";
import db from "..";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const Admin = () => {

  const [formData, setFormData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      console.log("signed out")
    }
  });

  const handleLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      window.location.reload();
    }).catch((error) => {
      // An error happened.
    });
  }

      // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
      Fetchdata();
  });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
      db.collection("messages").get().then((querySnapshot) => {

          // Loop through the data and store
          // it in array to display
          querySnapshot.forEach(element => {
              var data = element.data();
              setFormData(arr => [...arr, data]);
              console.log(data);

          });
      })
  }
// need to work on mapping contact form data
  return (
    <>
        { loggedIn ? (
        <div className="bg-background h-screen font-gotham">
        <div className="text-lg text-darkcream ml-4 mb-8 pt-8">Contact Form Submissions</div>
        <button onClick={handleLogout} className="text-orange">Logout</button>
        <div className="bg-background lg:h-screen lg:pb-0 pb-8">
        {formData.map(( messages ) => (
        <div key={messages} className="grid grid-cols-3">
        <div className="text-orange lg:col-span-1 lg:text-sm md:text-xs text-xs">
            <p>{messages.message.values.email}</p>
        </div>
        <div className="text-lightcream lg:col-span-1 lg:text-lg font-semibold">
            <p>{messages.message.values.name}</p>
        </div>
        <div className="text-lightcream lg:col-span-3 lg:text-base md:text-sm text-xs">
        <p>{messages.message.values.message}</p>
        <p>{messages.message.timestamp}</p>
        </div>
        </div>
        ))}
        </div>
        </div>
          ) : (
        <Login />
          )}
      </>
    )
}


export default Admin;