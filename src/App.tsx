import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.sass";
import AddCar from "./Pages/AddCar";
import CarDetail from "./Pages/CarDetail";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/login" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      {isLoggedIn && (
        <>
          <Route path="/Garage/*" element={<Home />} />
          <Route path="/Garage/:carId" element={<CarDetail />} />
          <Route path="/add-car" element={<AddCar />} />
        </>
      )}
    </Routes>
  );
}

export default App;
