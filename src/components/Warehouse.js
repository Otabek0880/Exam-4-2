import React, { useEffect, useState } from "react";
import "./Warehouse.css";
import http from "../axios";
import ModalBrand from "./ModalBrand";
import ModalGroup from "./ModalGroup";
import DeleteBrand from "./DeleteBrand";
import DeleteGroup from "./DeleteGroup";
import Navbar from "./Navbar";
const Warehouse = () => {
  const [brands, setBrands] = useState([]);
  const [groups, setGroups] = useState([]);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [id, setId] = useState();
  const getBrands = () => {
    http.get("/api/warehouse/brand/").then((res) => {
      console.log(res.data.results);
      setBrands(res.data.results);
    });
  };
  const getGroups = () => {
    http.get("/api/warehouse/group/").then((res) => {
      console.log(res.data.results);
      setGroups(res.data.results);
    });
  };
  useEffect(() => {
    getBrands();
    getGroups();
  }, []);
  const open = () => {
    setActive((prev) => !prev);
  };
  const open2 = () => {
    setActive4((prev) => !prev);
  };
  const deleteClient = (id) => {
    setActive2((prev) => !prev);
    console.log(id);
    setId(id);
  };
  const deleteClient2 = (id) => {
    setActive3((prev) => !prev);
    console.log(id);
    setId(id);
  };
  return (
    <div className="container">
      <Navbar />
      <ModalBrand
        modalValue={active}
        toggle={() => setActive((prev) => !prev)}
      />
      <ModalGroup
        modalValue={active4}
        toggle={() => setActive4((prev) => !prev)}
      />
      <DeleteBrand modalValue={active2} toggle={setActive2} id={id} />
      <DeleteGroup modalValue={active3} toggle={setActive3} id={id} />

      <div className="card">
        <div className="card-header">
          <h1 className="text-center">Wearehouse</h1>
        </div>
        <div className="card-body">
          <div className="card brand form-control text-center">
            <div className="card-header form-control">
              <h2>Brand</h2>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {brands.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteClient(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button className="btn btn-info form-control" onClick={open}>
                Create
              </button>
            </div>
          </div>
          <div className="card group form-control text-center">
            <div className="card-header form-control">
              <h2>Group</h2>
            </div>
            <div className="card-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>T/R</th>
                    <th>Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {groups.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => deleteClient2(item.id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="card-footer">
              <button className="btn btn-info form-control" onClick={open2}>
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Warehouse;
