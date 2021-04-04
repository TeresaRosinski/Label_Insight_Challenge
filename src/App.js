import "./App.css";
import React, { useState } from "react";
import Axios from "axios";
import ImageComponent from "./imageComponent.js";
import Modal from "./Modal";

function App() {
  const [imageInfo, setImageInfo] = useState([
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
  ]);

  const arrayLength = 25;
  const startingIndex = 0;
  const displayedImageArray = imageInfo.slice(startingIndex, arrayLength);

  const [showModal, setShowModal] = useState(false);
  const openModal = () => setShowModal(!showModal);

  return (
    <div className="App">
      <h1>Images</h1>
      <ImageComponent
        albumId="1"
        id="1"
        title="accusamus beatae ad facilis cum similique qui sunt"
        url="https://via.placeholder.com/600/92c952"
        thumbnailUrl="https://via.placeholder.com/150/92c952"
        openModalProp={openModal}
      />
      <Modal showModal={showModal} setShowModal={setShowModal}
      url="https://via.placeholder.com/600/92c952"></Modal>
    </div>
  );
}

export default App;
