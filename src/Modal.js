import React from "react";


const useStateWithLocalStorage = localStorageKey => {
  let [value, setValue] = React.useState(
    localStorage.getItem(localStorageKey) || ''
  );
 
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value]);
 
  return [value, setValue];
};
const Modal = (props) => {
  let [value, setValue] = useStateWithLocalStorage(
    'myValueInLocalStorage'
  );
  function closeModal(e) {
    props.setShowModal(false);
  }
  const onChange = event => setValue(event.target.value);

  return (
    <div>
      {props.showModal ? (
        <div className="modalBackground">
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h1>
              {props.title}{" "}
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
