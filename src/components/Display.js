import React from "react";
import { items } from "./Data";
import { cat } from "./Data";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Display = ({ setData }) => {
  const navigate = useNavigate();
  const filterByCategory = (category) => {
    console.log(category);
    const element = items.filter((product) => product.category === category);
    console.log(element);
    setData(element);
    navigate("/products", {
      state: { cate: category },
    });
  };
  //   const addToCart = (id, price, title, description, imgSrc) => {
  //     const obj = {
  //       id,
  //       price,
  //       title,
  //       description,
  //       imgSrc,
  //     };
  //     setCart([...cart, obj]);
  //     console.log("Cart element = ", cart);
  //     toast.success("Item added on cart", {
  //       position: "top-right",
  //       autoClose: 1500,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "dark",
  //     });
  //   };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="bg">
        <div className="container py-5">
          <div className="row">
            {cat.map((product) => {
              return (
                <>
                  <div
                    key={product.id}
                    className="col-lg col-md-6 my-3 text-center"
                  >
                    <div
                      className="card"
                      style={{ width: "18rem" }}
                      onClick={() => filterByCategory(product.cate)}
                    >
                      {/* <Link
                      to={`/products`}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }} */}
                      {/* > */}
                      <img
                        src={product.pic}
                        className="card-img-top"
                        alt="..."
                      />
                      {/* </Link> */}
                      <div
                        className="card-body"
                        onClick={() => filterByCategory(product.cate)}
                      >
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        {/* <button className="btn btn-primary mx-3">
                        {product.price} ₹
                      </button> */}
                        <div
                          // onClick={() =>
                          //   addToCart(
                          //     product.id,
                          //     product.price,
                          //     product.title,
                          //     product.description,
                          //     product.imgSrc
                          //   )
                          // }
                          className="btn btn-warning"
                        >
                          {product.cate}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
