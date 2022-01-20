import React, { useState } from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();
  const [state, setstate] = useState({
    firstName: "",
    secondName: "",
    address: "",
    city: "",
    country: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    navigate("/Page2");
    if (state) {
      localStorage.setItem("personalDetails", JSON.stringify(state));
    }
  };

  const onFormChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <h2 style={{ textAlign: "center" }}>
        PLEASE FILL THE FOLLOWING PERSONAL DETAILS
      </h2>
      <div className="input">
        <form>
          <input
            type="text"
            required
            className="input"
            name="firstName"
            placeholder="First Name"
            onChange={onFormChange}
          />
          <input
            type="text"
            required
            className="input"
            name="secondName"
            placeholder="Second Name"
            onChange={onFormChange}
          />
          <input
            type="text"
            required
            className="input"
            name="address"
            placeholder="Address"
            onChange={onFormChange}
          />
          <input
            type="text"
            required
            className="input"
            name="city"
            placeholder="City"
            onChange={onFormChange}
          />
          <input
            type="text"
            required
            className="input"
            name="country"
            placeholder="Country"
            onChange={onFormChange}
          />
        </form>

        <div>
          <button className="button" onClick={formSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page1;
