import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css";
import Register from "./components/Register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import RegTemp from "./components/regTemp";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context } from "./main";
import { server } from "./main";
import Order from "./components/Order";
import UserList from "./components/UserList";

const App = () => {
  const { setUser, setIsAuthenticated, setLoading, setAdmin, setHead } = useContext(Context);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/user/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        const {role} = res.data.user;
        console.log(role);
        if(role=="ADMIN"){
          setAdmin(true)
        }
        if(role==="HEAD"){
          setHead(true);
        }
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/order" element={<Order />} />
          <Route path="/employees" element={<UserList />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  );
};

export default App;
