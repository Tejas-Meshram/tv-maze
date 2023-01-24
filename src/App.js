import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ShowDetail from "./pages/ShowDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/showdetail/:id" element={<ShowDetail/>}/>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
