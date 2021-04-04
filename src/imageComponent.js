import React, { useState } from "react";
import Modal from "./Modal";

function ImageComponent(props) {
  return (
    <div
      className="imageComponent"
      onClick={props.openModalProp}
      url={props.url}
      key={props.key}
    >
      <img
        src={props.thumbnailUrl}
        title={props.title}
        id={props.id}
        className="thumbnail"
        alt={"box number" + props.id}
      />
      <Modal
        id={props.id}
        showModal={props.showModal}
        setShowModal={props.setShowModal}
        url={props.url}
        title={props.title}
      ></Modal>
    </div>
  );
}

export default ImageComponent;
