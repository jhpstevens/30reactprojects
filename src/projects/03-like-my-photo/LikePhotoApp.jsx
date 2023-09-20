import React from "react";
import Title from "../components/Title";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

import DogyDog from "./img/dog.jpg";

let  like=false;

export default function LikePhotoApp() {
  return (
    <div className="container text-center">
      <Title text={"LikePhotoApp"} />
      <Title classes={"subtitle"} text={"Likes"} />
      <div
        className="card card-dark m-auto"
        style={{ width: 300, cursor: "pointer" }}
      >
        <div className="card-header fs-xl">
          {" "}
          <AiFillSmile className="mr-2" />
          <small>DogyDog</small>
        </div>

        <img src={DogyDog} alt="img" style={{ height: "fit-content" }} />
        <div
          className="card-footer fs-xl d-flex"
          style={{ justifyContent: "space-between" }}
        >
          <AiOutlineComment />
          {like ? <AiFillHeart className="text-danger" /> : <AiOutlineHeart />}
        </div>
      </div>
    </div>
  );
}
