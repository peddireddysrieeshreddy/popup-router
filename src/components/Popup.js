import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./page.css";
import { useNavigate } from "react-router-dom";

const Popup = () => {
  const [modal, setModal] = useState(false);
  const [personalDetails, setpersonalDetails] = useState("");
  const [employeeDetails, setemployeeDetails] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setModal(true);
    const perDetails = JSON.parse(localStorage.getItem("personalDetails"));
    const empDetails = JSON.parse(localStorage.getItem("employeeDetails"));
    setpersonalDetails(perDetails);
    setemployeeDetails(empDetails);
  };
  const closeModal = () => {
    setModal(false);
  };
  const deleteData = () => {
    localStorage.removeItem("personalDetails");
    localStorage.removeItem("employeeDetails");
    setToggle(!toggle);
    navigate("/");
  };

  return (
    <div className="pop-upPage">
      <h1>
        CLICK BELOW <span style={{ color: "blue" }}>BLUE</span> BUTTON TO SEE
        THE DETAILS{" "}
      </h1>
      <Button onClick={showModal}>Button</Button>
      <Modal show={modal}>
        <Modal.Header>Entered Employee Information</Modal.Header>
        <Modal.Body>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Employee Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">NAME</th>
                <td>
                  {/* {personalDetails.firstName
                    ? personalDetails.firstName +
                      "_" +
                      personalDetails.secondName
                    : "dummy NAME"} */}
                  {(personalDetails &&
                    personalDetails.firstName +
                      "_" +
                      personalDetails.secondName) ||
                    "NAME NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">ADDRESS</th>
                <td>
                  {/* {personalDetails.address
                    ? personalDetails.address
                    : "dummy ADDRESS"} */}
                  {(personalDetails && personalDetails.address) ||
                    "ADDRESS NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">CITY</th>
                <td colSpan="2">
                  {" "}
                  {/* {personalDetails.city ? personalDetails.city : "dummy CITY"} */}
                  {(personalDetails && personalDetails.city) ||
                    "CITY NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">COUNTRY</th>
                <td colSpan="2">
                  {/* {personalDetails.country
                    ? personalDetails.country
                    : "dummy COUNTRY"} */}
                  {(personalDetails && personalDetails.country) ||
                    "COUNTRY NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">EMPLOYEE NAME</th>
                <td colSpan="2">
                  {/* {employeeDetails.empName
                    ? employeeDetails.empName
                    : "dummy EMPNAME"} */}
                  {(employeeDetails && employeeDetails.empName) ||
                    "EMPLOYEE NAME NOT ADDED"}
                </td>
              </tr>
              <tr>
                <th scope="row">EMPLOYEE ADDRESS</th>
                <td colSpan="2">
                  {/* {employeeDetails.empAddress
                    ? employeeDetails.empAddress
                    : "dummy EMPADDRESS"} */}
                  {(employeeDetails && employeeDetails.empAddress) ||
                    "EMPLOYEE ADDRESS NOT ADDED"}
                </td>
              </tr>
            </tbody>
          </table>
        </Modal.Body>
        <Modal.Footer>
          Thanks For Submitting The Details
          <Button onClick={closeModal} className="btn btn-danger">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <h1>
        CLICK BELOW <span style={{ color: "red" }}>RED</span> BUTTON TO ERASE
        DETAILS
      </h1>
      <Button onClick={deleteData} className="btn btn-danger">
        DELETE
      </Button>
    </div>
  );
};

export default Popup;
