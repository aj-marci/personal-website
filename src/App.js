import Nav from "./components/Nav";
import Main from "./components/Main";

function App() {
  return (
    <main>
      <div className="grid lg:grid-cols-2 md:grid-cols2 sm:grid-cols1
                      bg-background">
        <div>
        <Nav/>
        </div>
        <div>
        <Main/>
        </div>
      </div>
    </main>
  )
}

export default App;