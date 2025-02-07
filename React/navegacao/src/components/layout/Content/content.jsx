
import { Route, Routes } from "react-router-dom";
import About from "../../../views/examples/About/about";
import Param from "../../../views/examples/Param/param";
import Home from "../../../views/examples/Home/home";
import "./content.css";
import NotFound from "../../../views/examples/NotFound/notFound";



export default function Content() {
  return (
    <main className="Content">
        <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/param/:id" element={Param}/>
        <Route path="/" exact element={ <Home />}/>
        <Route
         path="*" element={<NotFound/>}/>

        </Routes>
    </main>
  );
}
/*
    <Routes>
        <Route path="/aboute" element={<About />} />
        <Route path="/param/:id" element={<Param />} />
        <Route path="/" exact element={<Home />} />
      </Routes>


      import { Routes, Route } from "react-router-dom";
import Home from "../../../views/examples/Home";
import About from "../../../views/examples/About/about";
import Param from "../../../views/examples/Param/param";
*/