import { Routes, Route } from 'react-router-dom';
import Archive from "./components/Archive";
import Homepage from './components/Homepage';
import Admin from './components/Admin';


function App() {

  return (
    <>
    <Routes>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  )
}

export default App;