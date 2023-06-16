import { Routes, Route } from 'react-router-dom';
import Archive from "./components/Archive";
import Homepage from './components/Homepage';

function App() {

  return (
    <>
    <Routes>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
    </>
  )
}

export default App;