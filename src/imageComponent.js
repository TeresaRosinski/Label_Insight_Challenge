import React from "react";

function ImageComponent(props) {
  return <img src={props.thumbnailUrl} title={props.title}className="thumbnail"/>;
}

export default ImageComponent;
