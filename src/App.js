import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Backdrop from "./components/Backdrop";
import { useState } from "react";
import Contact from "./components/Contact";
import Home1 from "./components/Home1";
import OurCauses from "./components/OurCauses";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Gallary from "./components/Gallary";
import Team from "./components/Team";
import Policies from "./components/Policies";
import Paymenttest from "./Paymenttest";

function App() {
  const [showModal, setModel] = useState(false);

  const closeModel = () => setModel(false);

  const [sidebar, setsidebar] = useState(false);

  const toggleSidebar = () => {
    setsidebar((prev) => !prev);
  };

  return (
    <>
      <Navbar openSidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} closeback={toggleSidebar} />
      <Backdrop sidebar={sidebar} closeback={toggleSidebar} />

      <Routes>
        <Route path="/" element={<Home1 />}></Route>
        <Route path="/ourcauses" element={<OurCauses />}></Route>

        <Route path="/about" element={<About />}></Route>

        <Route path="/contact" element={<Contact />}></Route>

        <Route path="/gallery" element={<Gallary />}></Route>

        <Route path="/team" element={<Team />}></Route>
        <Route path="/policies" element={<Policies />}></Route>
      </Routes>

      <Footer />

      <Paymenttest />
    </>
  );
}

export default App;
