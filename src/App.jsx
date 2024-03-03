import NavBar from "./components/NavBar";
import "./styles.css";
import Dogs from "./components/Dogs";
import Cats from "./components/Cats";
import About from "./components/About";
import Home from "./components/Home";
import Adopt from "./components/Adopt";
import Register from "./components/Register";
import ReleaseForm from "./components/ReleaseForm";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/funcat" element={<Cats />} />
            <Route path="/fundog" element={<Dogs />} />
            <Route path="/adopt" element={<Adopt />} />
            <Route path="/register" element={<Register />} />
            <Route path="/releaseform" element={<ReleaseForm />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
