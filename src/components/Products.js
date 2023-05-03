import React, { useState, useEffect } from "react";
import http from "../axios";
import ModalProduct from "./ModalProducts";
import DeleteProduct from "./DeletePruduct";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [brand, setBrand] = useState("");
  const [group, setGroup] = useState("");
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const getProducts = () => {
    http.get("/api/warehouse/prduct").then((res) => {
      setProducts(res.data.results);
    });
  };
  const open = () => {
    setActive((prev) => !prev);
  };
  const open2 = () => {
    setActive2((prev) => !prev);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="container mt-5">
      <ModalProduct
        modalValue={active}
        toggle={() => setActive((prev) => !prev)}
      />
      <DeleteProduct
        modalValue={active3}
        toggle={() => setActive3((prev) => !prev)}
      />
      <div className="card">
        <div className="card-header">
          <h1 className="text-center">Products</h1>
        </div>
      </div>
      <button
        className="btn btn-danger text-center form-control"
        onClick={open}
      >
        Create Product
      </button>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>code</th>
              <th>arrival price</th>
              <th>selling price</th>
              <th>Brand</th>
              <th>Group</th>
              <th>Quantity</th>
              <th>Image</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>{item.code}</td>
                  <td>{item.current_arrival_price}</td>
                  <td>{item.current_selling_price}</td>
                  <td>{item.brand.title}</td>
                  <td>{item.group.title}</td>
                  <td>{item.quantity}</td>
                  <td>
                    <img src={item.image} />
                  </td>
                  <td>{item.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="card-footer">
        <button
          className="btn btn-danger text-center form-control"
          onClick={open2}
        >
          DeleteProduct
        </button>
      </div>
    </div>
  );
};

export default Products;
