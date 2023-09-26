import { useEffect, useState } from "react";
import Login from "./adminLogin";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import db from "..";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Admin() {

  const [formData, setFormData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messageID, setMessageID] = useState([]);

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
      window.location.reload();
    }).catch((error) => {
    });
  }

  useEffect(()=>{
    let mounted = true
    getDocs(collection(db, "messages"))
        .then((querySnapshot)=>{
            const newData = querySnapshot.docs
                .map((doc) => ({...doc.data(), id:doc.id }));
            if (mounted) {
            setLoading(false);
            setFormData(newData);
            console.log(formData);
        }})
        return () => mounted = false
},[loading])


const deleteMessage = async (id) => {
  try {
    if (window.confirm("Are you sure? This entry will be deleted forever.") == true)
{   await deleteDoc(doc(db, "messages", id));
    window.location.reload();
  } else {
    window.location.reload();
  }
  } catch (error) {
    console.error("Error deleting document: ", error);
  }
}

  return (
    <>
        { loggedIn ? (
        <div className="bg-background h-screen font-gotham">
        <div className="text-lg text-darkcream font-bold ml-4 mb-8 pt-8">
          Contact Form Submissions
        </div>
        <div className="text-orange divide-y-2 divide-lightcream mx-4">
        {
        formData.map((formData)=>(
            <div key={formData.id}
              className="hover:bg-groupHover
                grid lg:grid-cols-4 md:grid-cols-4 grid-cols-1 py-4
                lg:my-0 md:my-0 my-4">
              <div className="lg:col-span-1">
                {formData.message.values.name}
              </div>
              <div className="lg:col-span-1 text-turqoise">
                {formData.message.values.email}
              </div>
              <div className="lg:col-span-1 text-lightcream">
                "{formData.message.values.message}"
              </div>
              <div className="lg:col-span-1 text-formError">
              <button onClick={() => deleteMessage(formData.id)}>
                <FontAwesomeIcon icon={faTrash} size="lg"/>
              </button>
              </div>
            </div>
        ))
    }
        </div>
        <button onClick={handleLogout}
          className="text-orange ml-4 mt-8 hover:text-turqoise font-bold">Logout</button>
        </div>
          ) : (
        <Login />
          )}
      </>
    )
}


export default Admin;