import React, { useState } from "react";
import rating from "../Images/rating_starts.png";
import white from "../Images/add_icon_white.png";
import green from "../Images/add_icon_green.png";
import red from "../Images/remove_icon_red.png";

const ItemCard = ({ image, name, price, description }) => {
  const [isAdding, setIsAdding] = useState(false);
  return (
    <div class="border rounded mt-4 shadow-sm" style={{ width: "20%" }}>
      <div className="position-relative">
        <img
          className="w-100 rounded"
          style={{ height: "13rem" }}
          src={image}
          alt=""
        />

        {!isAdding ? (
          <img
            className="position-absolute"
            style={{ width: "12%", bottom: "5%", right: "5%" }}
            src={white}
            onClick={() => setIsAdding(true)}
            alt=""
            srcset=""
          />
        ) : (
          <div
            className="gap-2 d-flex align-items-center position-absolute"
            style={{ bottom: "5%", right: "5%" }}
          >
            <img src={red} alt="" />
            <div className="fs-5 text-light">1</div>
            <img src={green} alt="" />
          </div>
        )}
      </div>
      <div className="d-flex justify-content-between m-3 align-items-center">
        <div className="fw-bold fs-5">{name}</div>
        <img src={rating} alt="" />{" "}
      </div>
      <div className="m-3" style={{ fontSize: "12px" }}>
        {description}
      </div>
      <div className="m-3 fw-bold fs-5" style={{ color: "rgb(255,98,61)" }}>
        ${price}
      </div>
    </div>
  );
};

export default ItemCard;
