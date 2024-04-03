import "./App.css";
import Strip from "./components/Strip";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Strip />
        <Topbar />
        <Navbar />
      </Router>
    </>
  );
}

export default App;
