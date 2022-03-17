import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Sites from "./pages/Site";
import Offer from "./pages/Offer";
import Advantage from "./pages/Advantage";
import Application from "./pages/Application";
import Footer from "./components/footer";
import Header from "./components/header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          element={
            <>
              <div className="fixed top-0 inset-x-0 bottom-full z-50">
                <Header />
              </div>
              <div id="home">
                <Home />
              </div>
              <div id="about">
                <About />
              </div>
              <div id="sites">
                <Sites />
              </div>
              <div id="offer">
                <Offer />
                <Advantage />
              </div>
              <div id="application">
                <Application />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
