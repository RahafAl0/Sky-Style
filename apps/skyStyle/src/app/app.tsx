import { Routes, Route } from "react-router-dom";
import Register from "../components/Register";
import Login from "../components/Login";
import Home from "../components/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;
