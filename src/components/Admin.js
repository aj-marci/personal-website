import Login from "./adminLogin";

const Admin = () => {

  return (
    <>
        {localStorage.getItem('AJadminEmail') ? (
        <div className="bg-background h-screen font-gotham">
        <div className="text-lg text-darkcream ml-4 mb-8 pt-8">Contact Form Submissions</div>
        <div className="text-orange ml-4">Date submitted</div>
        </div>
          ) : (
        <Login />
          )}
      </>
    )
}


export default Admin;