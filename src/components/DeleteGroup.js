import React from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import http from "../axios";
import Notification from "./Notification";
import { ToastContainer, toast } from "react-toastify";

const DeleteGroup = ({ modalValue, toggle, id }) => {
  const deleteClient = () => {
    http
      .delete(`/api/warehouse/group/${id}/`)
      .then((res) => {
        console.log(res);
        if (res.status === 204) {
          setTimeout(() => {
            window.location.reload();
          }, 1000);
          Notification({ type: "success", text: "Success", theme: "light" });
        }
      })
      .catch((err) => {
        if (err.request.status === 0) {
          Notification({ type: "error", text: "Error", theme: "dark" });
        }
      });
  };

  return (
    <div className="container">
      <ToastContainer />
      <Modal isOpen={modalValue} toggle={() => toggle((prev) => !prev)}>
        <ModalBody>
          <h3>Are you sure?</h3>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-info form-control"
            onClick={() => toggle((prev) => !prev)}
          >
            close
          </button>
          <button
            className="btn btn-danger form-control"
            onClick={deleteClient}
          >
            delete
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default DeleteGroup;
