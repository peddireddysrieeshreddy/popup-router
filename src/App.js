import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Popup from "./components/Popup";
import ErrorPage from "./components/ErrorPage";

function App() {
  const design = {
    textAlign: "center",
    backgroundColor: "black",
    color: "white",
    height: "100px",
    paddingTop: "30px",
  };
  return (
    <>
      <div className="App">
        <h1 style={design}>POPUP DATA USING ROUTER</h1>

        <Router>
          <div className="pagesList">
            <nav>
              <li>
                <Link to="/">PAGE1</Link>
              </li>
              <li>
                <Link to="/page2">PAGE2</Link>
              </li>
              <li>
                <Link to="/popup">POPUP PAGE</Link>
              </li>
            </nav>
          </div>
          <Routes>
            <Route exact path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/popup" element={<Popup />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
