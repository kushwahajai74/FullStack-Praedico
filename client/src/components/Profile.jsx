import React, { useContext, useEffect } from "react";
import { Context } from "../main";
import { Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";
import { server } from "../main";

const Profile = () => {
  const {
    setIsAuthenticated,
    isAuthenticated,
    setLoading,
    loading,
    user,
    setUser,
  } = useContext(Context);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${server}/user/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setUser(res.data.user);
        setIsAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        setUser({});
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (!isAuthenticated) return <Navigate to={"/"} />;
  return loading ? (
    <Loader />
  ) : (
    <Container>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </Container>
  );
};

export default Profile;
