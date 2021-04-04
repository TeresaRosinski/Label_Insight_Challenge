import React from "react";

const Modal = (props) => {
  const [value, setValue] = React.useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );
  React.useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", value);
  }, [value]);
  const onChange = (event) => setValue(event.target.value);

  function closeModal(e) {
    e.stopPropagation();
    props.setShowModal(false);
  }

  return (
    <div>
      {props.showModal ? (
        <div className="modalBackground">
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h1>
              Title Here{" "}
              <span className="close" onClick={closeModal}>
                &times;
              </span>
            </h1>
            <img src={props.url}></img>
            <label>Description:</label>
            <input value={value} type="text" onChange={onChange}></input>
            <p>{value}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
