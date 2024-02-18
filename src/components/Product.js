import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { items } from "./Data";

const Product = ({ item, cart, setCart }) => {
  const location = useLocation();
  const cate = location.state?.cate;
  console.log(item);

  if (item?.length === 0) {
    console.log("here");
    item = items.filter((product) => product.category === cate);
  }
  const addToCart = (id, price, title, description, imgSrc) => {
    const obj = {
      id,
      price,
      title,
      description,
      imgSrc,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item added on cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

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
            {item?.map((product) => {
              console.log(item);
              return (
                <>
                  <div
                    key={product.id}
                    className="col-lg col-md-6 my-3 text-center"
                  >
                    <div className="card" style={{ width: "18rem" }}>
                      <Link
                        to={`/product/${product.id}`}
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <img
                          src={product.imgSrc}
                          className="card-img-top"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.brief}</p>
                        <button className="btn btn-primary mx-3">
                          {product.price} ₹
                        </button>
                        <button
                          onClick={() =>
                            addToCart(
                              product.id,
                              product.price,
                              product.title,
                              product.description,
                              product.imgSrc
                            )
                          }
                          className="btn btn-warning"
                        >
                          Add To Cart
                        </button>
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

export default Product;
