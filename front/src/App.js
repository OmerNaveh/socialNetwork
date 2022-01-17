import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="App"></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
