import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import wish from "../images/wish.svg";
import watch from "../images/watch.jpg";
import compare from "../images/prodcompare.svg";
import view from "../images/view.svg";
import cart from "../images/add-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Features/user/userSlice";

function ProductCard(props) {
  const grid = props;
  const data = grid.data;
  let location = useLocation();
  const dispatch = useDispatch();

  const addprodToWishlist = (id) => {
    dispatch(addToWishlist(id));
  };

  return (
    <>
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              location.pathname == "/product" ? `gr-${grid.grid}` : "col-3"
            }`}
          >
            <div
              // to={`${
              //   location.pathname == "/"
              //     ? "product/:id"
              //     : location.pathname == "/product/:id"
              //     ? "/product/:id"
              //     : ":id"
              // }`}
              className="product-card position-relative border-0 bg-white"
            >
              <div className="wishlist-icon position-absolute">
                <button
                  className="border bg-transparent"
                  onClick={(e) => {
                    addprodToWishlist(item._id);
                    // console.log("helo")
                  }}
                >
                  <img src={wish} alt="wishlist"></img>
                </button>
              </div>
              {/* <div className="product-image"> */}
              <Link to={'/product/'+item?._id}>
                <img 
                  src={item.images[0].url}
                  alt="product"
                  className="img-fluid"
                ></img>
              </Link>
             
              <div className="product-details d-flex flex-column align-items-center jusify-content-center">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.title}</h5>
                <ReactStars
                  classNames="d-flex justify-content-center "
                  count={5}
                  size={24}
                  value={item?.totalrating}
                  edit={false}
                  activeColor="#ffd700"
                ></ReactStars>

                <p
                  className={`description ${
                    grid.grid === 12 ? "d-block" : "d-none"
                  }`}
                  dangerouslySetInnerHTML={{ __html: item?.description }}
                ></p>
                <p className="price">${item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <button className="border-0 bg-transparent">
                    <img src={compare} alt="compare"></img>
                  </button>
                  <Link
                    to={"/product/" + item?._id}
                    className="border-0 bg-transparent"
                  >
                    <img src={view} alt="view"></img>
                  </Link>
                  <button className="border-0 bg-transparent">
                    <img src={cart} alt="addcart"></img>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductCard;
