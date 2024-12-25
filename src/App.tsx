import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import SuccessView from "./components/registration/SuccessView";
import RegistrationForm from "./components/registration/RegistrationForm";
import Results from "./components/registration/Results";
import Navbar from "./components/layout/Navbar";
import Login from "./components/admin/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/success" element={<SuccessView />} />
        <Route path="/results" element={<Results />} />
        <Route path="/admin/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
