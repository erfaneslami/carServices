import { Navigate, Route, Routes } from "react-router-dom";
import "./App.sass";
import AddCar from "./Pages/AddCar";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/welcome" element={<Home />} />
      <Route path="/add-car" element={<AddCar />} />
    </Routes>
  );
}

export default App;
