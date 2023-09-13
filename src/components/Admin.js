import { useEffect, useState } from "react";
import Login from "./adminLogin";
import { collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import db from "..";

function Admin() {

  const [formData, setFormData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

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
// need to work on mapping contact form data
  return (
    <>
        { loggedIn ? (
        <div className="bg-background h-screen font-gotham">
        <div className="text-lg text-darkcream ml-4 mb-8 pt-8">Contact Form Submissions</div>
        <div className="text-orange">
        {
        formData.map((formData,i)=>(
            <p key={i} className="text-turqoise">
                {formData.id}
            </p>
        ))
    }
        </div>
        <button onClick={handleLogout} className="text-orange">Logout</button>
        </div>
          ) : (
        <Login />
          )}
      </>
    )
}


export default Admin;