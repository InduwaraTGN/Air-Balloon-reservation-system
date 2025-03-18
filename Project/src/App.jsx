import "./App.css";
import HomePage from "./views/Home page";
import LoginPage from "./views/Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Payment from "./views/Payment";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
