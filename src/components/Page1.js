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
  const [error, setError] = useState({
    firstName: false,
    secondName: false,
    address: false,
    city: false,
    country: false,
  });
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    console.log(error);
    if (
      !state.firstName &&
      !state.secondName &&
      !state.address &&
      !state.city &&
      !state.country
    ) {
      setError({
        firstName: true,
        secondName: true,
        address: true,
        city: true,
        country: true,
      });
    } else if (
      !state.secondName &&
      !state.address &&
      !state.city &&
      !state.country
    ) {
      setError({ secondName: true, address: true, city: true, country: true });
    } else if (!state.address && !state.city && !state.country) {
      setError({ address: true, city: true, country: true });
    } else if (!state.city && !state.country) {
      setError({ city: true, country: true });
    } else if (!state.country) {
      setError({ country: true });
    } else {
      console.log("filled all the details");
      navigate("/Page2");
    }

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
          {error && error.firstName && (
            <p style={{ color: "red" }}>Please fill the First Name input</p>
          )}
          <input
            type="text"
            required
            className="input"
            name="secondName"
            placeholder="Second Name"
            onChange={onFormChange}
          />
          {error && error.secondName && (
            <p style={{ color: "red" }}>Please fill the Second Name input</p>
          )}
          <input
            type="text"
            required
            className="input"
            name="address"
            placeholder="Address"
            onChange={onFormChange}
          />
          {error && error.address && (
            <p style={{ color: "red" }}>Please fill the Address input</p>
          )}
          <input
            type="text"
            required
            className="input"
            name="city"
            placeholder="City"
            onChange={onFormChange}
          />
          {error && error.city && (
            <p style={{ color: "red" }}>Please fill the City input</p>
          )}
          <input
            type="text"
            required
            className="input"
            name="country"
            placeholder="Country"
            onChange={onFormChange}
          />
          {error && error.country && (
            <p style={{ color: "red" }}>Please fill the Country input</p>
          )}
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
