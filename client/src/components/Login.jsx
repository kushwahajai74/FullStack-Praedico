import { useContext, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Context } from "../main";
import { toast } from "react-hot-toast";
import { server } from "../main";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, loading, setLoading } =
    useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (isAuthenticated) return <Navigate to={"/profile"} />;

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${server}/auth/login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(data);
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error);
      setLoading(false);
      setIsAuthenticated(false);
    }
  };
  return (
    <div className="formContainer">
      <form onSubmit={submitHandler}>
        <h3>Sign In</h3>
        <div className="col-sm-12 mb-3 form-group">
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

        <div className="col-sm-12 mb-2 form-group">
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
        <div className="d-grid">
          <button disabled={loading} type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
