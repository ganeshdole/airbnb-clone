import HomeDetails from "./pages/house/HomeDetails";
import HostHome from "./pages/house/HostHome";
import ForgotPassword from "./pages/user/ForgotPassword";
import ResetPassword from "./pages/user/ResetPassword";
import SingIn from "./pages/user/SignIn";
import SignUp from "./pages/user/SignUp";
import SearchHome from "./pages/house/SearchHome";
import Home from "./pages/house/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/ " element={<Home />} />
        <Route path="/sign-in" element={<SingIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
