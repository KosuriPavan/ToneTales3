import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/homepage/HomePage.jsx";
import AdminLogin from "./components/AdminLogin/LoginPage.jsx"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<AdminLogin/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
