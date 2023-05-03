import React, { useState } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import http from "../axios";
const ModalBrand = ({ modalValue, toggle }) => {
  const [title, setTitle] = useState("");
  const addBrand = () => {
    const form = new FormData();
    form.append("title", title);
    http.post("/api/warehouse/brand/", form).then((res) => {
      if (res.status === 201) {
        window.location.reload();
      }
    });
  };
  return (
    <Modal isOpen={modalValue} toggle={toggle}>
      <ModalBody>
        <div className="card">
          <div className="card-body">
            <input
              type="text"
              className="form-control"
              placeholder="Enter brand"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="card-footer">
            <button className="btn btn-success form-control" onClick={addBrand}>
              Add
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalBrand;
