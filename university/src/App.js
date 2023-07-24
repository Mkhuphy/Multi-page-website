import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import bootstrap from "bootstrap";
import Home from "./pages/Home";
import Teaching from "./pages/Teaching";
import News from "./pages/News";
import Publication from "./pages/Publication";
import Team from "./pages/Team";
import GroupActivities from "./pages/GroupActivities";
import Research from "./pages/Research";
import Technology from "./pages/Technology";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TeamInfo from "./pages/TeamInfo";
import Funding from "./pages/Funding";
import Consultancy from "./pages/Consultancy";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/education" element={<Teaching />} />
          <Route path="/news" element={<News />} />
          <Route path="/publications" element={<Publication />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:name" element={<TeamInfo />} />
          <Route path="/group-activities" element={<GroupActivities />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/consultancy" element={<Consultancy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
