import React, { useState, useEffect } from "react";
import "./page.css";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();

  const [state, setstate] = useState({
    empName: "",
    empAddress: "",
  });
  const [error, setError] = useState({
    empName: false,
    empAddress: false,
  });
  const [data, setData] = useState("");
  const checkDemo = () => {
    const variable = JSON.parse(localStorage.getItem("personalDetails"));
    setData(variable);
    console.log(variable);
  };
  useEffect(() => {
    checkDemo();
  }, [error, state]);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    if (!state.empName && !state.empAddress) {
      setError({
        empName: true,
        empAddress: true,
      });
    } else if (!state.empAddress) {
      setError({
        empAddress: true,
      });
    } else {
      navigate("/popup");
    }
    console.log(error);

    if (state.empName && state.empAddress) {
      setData(state);
      navigate("/popup");
    }
    localStorage.setItem("employeeDetails", JSON.stringify(state));
  };

  const onFormChange = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  };

  return (
    <>
      <div className="container">
        <h1>First Page Details</h1>
        <div className="container2">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>FIRST PAGE DETAILS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">NAME</th>
                <td colSpan="2">
                  {(data && data.firstName) || "NAME NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">ADDRESS</th>
                <td colSpan="2">
                  {(data && data.address) || "ADDRESS NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">CITY</th>
                <td colSpan="2">{(data && data.city) || "CITY NOT ADDED"}</td>
              </tr>
              <tr>
                <th scope="row">COUNTRY</th>
                <td colSpan="2">
                  {(data && data.country) || "COUNTRY NOT ADDED"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <h2>PLEASE FILL THE FOLLOWING DETAILS</h2>
        <div className="input">
          <form>
            <input
              type="text"
              required
              className="input"
              name="empName"
              placeholder="Employee Name"
              onChange={onFormChange}
            />
            {error && error.empName && (
              <p style={{ color: "red" }}>
                Please fill the Employee Name input
              </p>
            )}

            <input
              type="text"
              required
              className="input"
              name="empAddress"
              placeholder="Employee Address"
              onChange={onFormChange}
            />
            {error && error.empAddress && (
              <p style={{ color: "red" }}>
                Please fill the Employee Address input
              </p>
            )}
          </form>

          <div>
            <button className="button" onClick={formSubmit}>
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page2;
