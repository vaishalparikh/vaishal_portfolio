import React, { useState } from "react";
import axios from "axios";

export default function ContactUs() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    message: "",
  });

  let name, value;

  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, phoneNumber, address, message } = user; // object Destructuring

    axios
      .post("/contact", {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        message,
      })
      .then((res) => {
        console.log(res.data);
        alert("Success");
      })
      .catch((e) => {
        console.log(e);
        alert("Failed");
      });
  };

  return (
    <div
      style={{
        display: "block",
        width: "35%",
        margin: "0 auto",
      }}
    >
      <form onSubmit={PostData} className="justi">
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              id="firstName"
              name="firstName"
              autoComplete="off"
              value={user.firstName}
              onChange={handleInput}
            ></input>
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
              id="lastName"
              name="lastName"
              autoComplete="off"
              value={user.lastName}
              onChange={handleInput}
            ></input>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Email Id"
              value={user.email}
              onChange={handleInput}
            ></input>
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              className="form-control"
              id="phone"
              name="phoneNumber"
              autoComplete="off"
              placeholder="Phone Number"
              value={user.phoneNumber}
              onChange={handleInput}
            ></input>
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Address"
            id="address"
            name="address"
            autoComplete="off"
            value={user.address}
            onChange={handleInput}
          ></input>
        </div>

        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="message"
            name="message"
            autoComplete="off"
            placeholder="Type your message"
            value={user.message}
            onChange={handleInput}
          ></input>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            {" "}
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
}
