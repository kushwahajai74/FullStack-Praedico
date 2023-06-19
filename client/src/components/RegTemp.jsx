import React, { useContext, useState } from "react";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
const RegTemp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${server}/auth/register`,
        { name, email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
      setLoading(false);
    }
  };

  if (isAuthenticated) return <Navigate to={"/"} />;
  return (
    <>
      <div
        className="container mt-5"
        style={{
          maxWidth: "70vw",
          border: "2px solid gray",
          borderRadius: "10px",
          padding: "10px 20px",
          backgroundColor: "white",
        }}
      >
        <form onSubmit={submitHandler}>
          <div className="row jumbotron">
            <div className="col-sm-12 my-2">
              <h2 className="text-center text-black h1">
                Register New Employee
              </h2>
            </div>
            <div className="col-sm-12 form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control"
                name="name"
                id="name"
                placeholder="Enter your name."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter your email."
                required
              />
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="password">Password</label>
              <input
                type="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Enter your password."
                required
              />
            </div>
            <br />
            <div className="col-sm-12 form-group my-4 text-center">
              <button
                disabled={loading}
                type="submit"
                className="btn btn-primary"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <div>
          <p>
            Already have an account?{" "}
            <span>
              <a href="/auth/login">Login</a>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegTemp;
