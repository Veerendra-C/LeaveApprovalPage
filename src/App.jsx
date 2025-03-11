import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Applayout from "./Components/AppLayout/Applayout";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/");
  };

  return (
    <>
      {!loggedIn ? (
        <Applayout />
      ) : (
        <>
          <NavBar onLogout={handleLogout} />
          <Applayout />
        </>
      )}
    </>
  );
}

export default App;
