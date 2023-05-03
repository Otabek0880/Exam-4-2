import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import http from "../axios";
const ModalProduct = ({ modalValue, toggle }) => {
  const [brands, setBrands] = useState([]);
  const [groups, setGroups] = useState([]);

  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [arrivalprice, setArrivalprice] = useState("");
  const [sellingprice, setSellingprice] = useState("");
  const [group, setGroup] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
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
  const addProduct = () => {
    const form = new FormData();
    form.append("title", title);
    form.append("code", code);
    form.append("current_arrival_price", arrivalprice);
    form.append("current_selling_price", sellingprice);
    form.append("group", group);
    form.append("brand", brand);
    form.append("quantity", quantity);
    form.append("description", description);
    form.append("image", image);
    http.post("/api/warehouse/product/", form).then((res) => {
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
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter code"
              onChange={(e) => setCode(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter arrival price"
              onChange={(e) => setArrivalprice(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter selling price"
              onChange={(e) => setSellingprice(e.target.value)}
            />
            <select
              className="form-control"
              onChange={(e) => setBrand(e.target.value)}
            >
              {brands.map((item, index) => {
                return (
                  <>
                    <option value="" selected hidden>
                      Select-brand
                    </option>
                    <option value={item}>{item}</option>
                  </>
                );
              })}
            </select>
            <select
              className="form-control"
              onChange={(e) => setGroup(e.target.value)}
            >
              {groups.map((item, index) => {
                return (
                  <>
                    <option value="" selected hidden>
                      Select-group
                    </option>
                    <option value={item}>{item}</option>
                  </>
                );
              })}
            </select>
            <input
              type="text"
              className="form-control"
              placeholder="Enter arrival quantity"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="Enter description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success form-control"
              onClick={addProduct}
            >
              Add
            </button>
          </div>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalProduct;
