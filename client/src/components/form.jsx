import React from "react";
import axios from "axios";
import "./styles.css";

export default function From() {
  const [product, setProduct] = React.useState({ name: "", description: "" });

  const handleChangeProduct = function (e) {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = function () {
    console.log(product);
    axios
      .post("http://localhost:5000/products", {
        ...product,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h2>New Product</h2>
      <form>
        <div className="user-box">
          <input type="text" name="name" onChange={handleChangeProduct} />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            name="description"
            onChange={handleChangeProduct}
          />
          <label>Description</label>
        </div>
        <button
          type="button"
          onClick={() => {
            handleSubmit();
          }}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
}
