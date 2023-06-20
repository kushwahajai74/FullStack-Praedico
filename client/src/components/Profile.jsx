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

  if (!isAuthenticated) return <Navigate to="/" replace={true} />;
  return loading ? (
    <Loader />
  ) : (
    <Container
      style={{
        maxWidth: "700px",
        marginTop: "12vh",
        border: "2px solid gray",
        borderRadius: "10px",
        padding: "10px 20px",
      }}
    >
      <h1>
        {user?.fname} {user?.lname}
      </h1>

      <p>{user?.email}</p>
      <p>{user?.address}</p>
      <p>{user?.city}</p>
      <p>{user?.contact}</p>
      <p>{user?.aadhar}</p>
      <p>{user?.description}</p>
      <p>{user?.endsAt}</p>
      <p>{user?.startsAt}</p>
      <p>{user?.institute}</p>
      <p>{user?.managedBy}</p>
      <p>{user?.pincode}</p>
      <p>{user?.role}</p>
    </Container>
  );
};

export default Profile;
