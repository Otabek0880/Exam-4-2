import React, { useEffect, useState } from "react";
import http from "../axios";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
const ModalApp = ({ modalValue, toggle, roles, username, password }) => {
  const [select, setSelect] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelect(e.target.value);
  };
  const send = () => {
    http
      .post("api/user/token/", {
        username: username,
        password: password,
        current_role: select,
      })
      .then((res) => {
        console.log(res.data.access);
        localStorage.setItem("token", res.data.access);
        if (res.data.access) {
          if (select === "warehouseman") {
            navigate("/warehouse");
          }
        }
      });
  };
  return (
    <Modal isOpen={modalValue} toggle={toggle}>
      <ModalBody>
        <div className="card">
          <div className="card-header">
            <h1 className="text-center">Select role</h1>
          </div>
          <div className="card-body">
            <select className="form-control" onChange={handleChange}>
              {roles.map((item, index) => {
                return (
                  <>
                    <option value="" selected hidden>
                      Select-role
                    </option>
                    <option value={item}>{item}</option>
                  </>
                );
              })}
            </select>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-info" onClick={send}>
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalApp;
