import React, { useState } from "react";
import http from "../axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Notification from "./Notification";
import ModalApp from "./ModalApp";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState([]);
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    http
      .post("/api/user/token/", {
        username: username,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          Notification({ type: "success", text: "Success", theme: "light" });
        }
      })
      .catch((err) => {
        console.log(err.response.data.roles);
        setRoles(err.response.data.roles);
        if (err.response.data.roles) {
          setActive((prev) => !prev);
        }
        if (err.response.status === 400) {
          Notification({ type: "success", text: "Success", theme: "light" });
        }
      });
  };
  return (
    <div className="container">
      <ToastContainer />
      <ModalApp
        modalValue={active}
        toggle={() => setActive((prev) => !prev)}
        roles={roles}
        username={username}
        password={password}
      />
      <div className="row mt-3">
        <div className="col-md-6 offset-3">
          <div className="card">
            <div className="card-header">
              <h1 className="text-center">Login</h1>
            </div>
            <div className="card-body">
              <form>
                <input
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-control my-2"
                  type="text"
                  placeholder="Username"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control my-2"
                  type="password"
                  placeholder="Password"
                />
                <button
                  className="btn btn-success form-control"
                  onClick={login}
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
