import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import styles from "./AddPlayerForm.module.css";

const AddPlayerForm = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [position, setPosition] = useState("");

  const sendData = (event) => {
    event.preventDefault();
  };

  useEffect(() => {
    const timeOutRunner = setTimeout(() => {
      console.log("im on the timeout");
    }, 500);
    return () => {
      clearTimeout(timeOutRunner);
      console.log("RETURN FUNC");
    };
  }, [name]);

  return (
    <form onSubmit={sendData}>
      <label>Name</label>
      <input
        id="firstName"
        value={name}
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      ></input>
      <label>Age</label>
      <input
        id="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      ></input>
      <label value="Position">Position</label>
      <input
        id="position"
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) => {
          setPosition(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <button
        className={styles.btnClass}
        onClick={() => props.addPlayerToForm(name, age, position)}
        type="submit"
        value="Add Player"
      >
        Add Player
      </button>
    </form>
  );
};

export default AddPlayerForm;
