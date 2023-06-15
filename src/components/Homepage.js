import Nav from "./Nav";
import Main from "./Main";


function Homepage() {
    return (
     <div className="grid lg:grid-cols-2 md:grid-cols2 sm:grid-cols1
        bg-background">
        <div>
            <Nav/>
        </div>
        <div>
            <Main/>
        </div>
    </div>
    );
}

export default Homepage;