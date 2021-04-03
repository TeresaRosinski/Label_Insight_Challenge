import "./App.css";
import React, { useState } from "react";
import ReturnedImages from "./imageComponent.js";
import Axios from "axios";

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

  const getImages = () => {
    Axios.get("https://jsonplaceholder.typicode.com/photos").then(
      (response) => {
        setImageInfo(response.data);
      }
    );
  };

  getImages();
  const arrayLength = 25;
  const startingIndex = 0; 
  const displayedImageArray = imageInfo.slice(startingIndex, arrayLength);

  return (
    <div className="App">
      <h1>Images</h1>
      <div className="image_container">
        {displayedImageArray.map((item, index) => (
          <ReturnedImages thumbnailUrl={item.thumbnailUrl} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
