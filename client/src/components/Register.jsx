import React, { useState } from "react";

const Register = () => {
  const [details, setDetails] = useState({});
  const handleSubmit = (e) => {};
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div
        className="container mt-3"
        style={{
          border: "2px solid gray",
          borderRadius: "10px",
          padding: "10px 20px",
          backgroundColor: "white",
        }}
      >
        <form onSubmit={handleSubmit} className="lg-form">
          <div className="row jumbotron">
            <div className="col-sm-12 my-2">
              <h2 className="text-center text-black h1">
                Register New Employee
              </h2>
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="name-f">First Name</label>
              <input
                type="text"
                className="form-control"
                name="fname"
                onChange={handleChange}
                id="name-f"
                placeholder="Enter your first name."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="name-l">Last name</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="lname"
                id="name-l"
                placeholder="Enter your last name."
                required
              />
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                onChange={handleChange}
                name="email"
                id="email"
                placeholder="Enter your email."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="address-1">Aadhar Number</label>
              <input
                type="address"
                className="form-control"
                name="aadhar"
                onChange={handleChange}
                id="address-1"
                placeholder="Aadhar number"
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="address-2">Address</label>
              <input
                type="address"
                className="form-control"
                onChange={handleChange}
                name="address"
                id="address-2"
                placeholder="Adrress/Locality."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="State">City</label>
              <input
                type="address"
                className="form-control"
                onChange={handleChange}
                name="city"
                id="State"
                placeholder="Enter your city name."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="zip">Postal-Code</label>
              <input
                type="zip"
                className="form-control"
                onChange={handleChange}
                name="pincode"
                id="zip"
                placeholder="Postal-Code."
                required
              />
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="zip">Institute Name</label>
              <input
                type="zip"
                className="form-control"
                onChange={handleChange}
                name="institute"
                id="zip"
                placeholder="Institute."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="employeeType">Employee Type</label>
              <select
                name="role"
                className="form-select"
                onChange={handleChange}
                aria-label="Default select example"
              >
                <option selected>Select</option>
                <option value="HEAD">Head</option>
                <option value="EMPLOYEE">Employee</option>
                <option value="INTERN">Intern</option>
              </select>
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="Date">Date Of Joining</label>
              <input
                type="Date"
                name="startsAt"
                className="form-control"
                onChange={handleChange}
                id="Date"
                placeholder=""
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="Date">Date Of Leaving</label>
              <input
                type="Date"
                name="endsAt"
                className="form-control"
                onChange={handleChange}
                id="Date"
                placeholder=""
                required
              />
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="tel">Phone</label>
              <input
                type="tel"
                name="contact"
                className="form-control"
                onChange={handleChange}
                id="tel"
                placeholder="Enter Your Contact Number."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="password">Password</label>
              <input
                type="Password"
                name="password"
                className="form-control"
                onChange={handleChange}
                id="password"
                placeholder="Enter your password."
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                name="password2"
                id="password2"
                className="form-control"
                onChange={handleChange}
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="col-sm-6 form-group">
              <label htmlFor="pass2">Manager Email</label>
              <input
                name="managedBy"
                className="form-control"
                onChange={handleChange}
                id="pass2"
                placeholder="Enter Manager Email"
              />
            </div>

            <div className="col-sm-6 form-group">
              <label htmlFor="name-l">Description</label>
              <input
                type="text"
                className="form-control"
                onChange={handleChange}
                name="description"
                id="name-l"
                placeholder="Enter employee description."
              />
            </div>

            <br />
            <div className="col-sm-12 form-group my-4 text-center">
              <button className="btn btn-primary" onClick={handleSubmit}>
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

export default Register;
