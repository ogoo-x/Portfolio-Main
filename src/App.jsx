import Home from "./pages/Home";
import Nav from "./pages/Nav";
import Work from "./pages/Work";
import Blog from "./pages/Blog";

//journal
import About from "./Journal/About";
import Developer from "./Journal/Developer";
import PortfolioProcess from "./Journal/PortfolioProcess";

//works
import Okoko from "./Case Study/okoko";
import FastFood from "./Case Study/FastFood"

import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="journal" element={<Blog />} />
        <Route path="works" element={<Work />} />

        <Route path="journal/about" element={<About />} />
        <Route path="journal/why-I-became-a-developer" element={<Developer />} />
        <Route path="journal/how-I-developed-my-portfolio-in-24-hours" element={<PortfolioProcess />} />

        <Route path="works/okoko" element={<Okoko />} />
        <Route path="works/fastfood" element={<FastFood />} />
      </Routes>
     
    </div>
      );
}

export default App;
