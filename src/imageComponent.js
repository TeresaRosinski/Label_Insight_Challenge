import React, { useState } from "react";


function ImageComponent(props) {
  return (
    <div  className="imageComponent" onClick={props.openModalProp} url={props.url}>
      <img
        src={props.thumbnailUrl}
        title={props.title}
        id={props.id}
        className="thumbnail"
        alt={"box number" + props.id}
      />
    </div>
  );
}

export default ImageComponent;
