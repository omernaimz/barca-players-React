import { Fragment, useEffect, useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import styles from "./BarcaPlayes.module.css";
import Card from "./Card";

const BARCA_PLAYERS = [
  {
    name: "Ansu Fati",
    age: "29",
    position: "ST",
    image: "",
  },
  {
    name: "Gerard Pique",
    age: "33",
    position: "CB",
    image: "",
  },
  {
    name: "Pedri",
    age: "19",
    position: "CM",
    image: "",
  },

  {
    name: "Ferran Torres",
    age: "21",
    position: "LW",
    image: "",
  },

  {
    name: "Sergio Busqets",
    age: "34",
    position: "CDM",
    image: "",
  },
];

const BarcaPlayes = (props) => {
  const [addPlayerbtn, setAddPlayerBtn] = useState(false);
  const [barcaPlayersState, setBarcaPlayerState] = useState(BARCA_PLAYERS);

  const arrayHandler = barcaPlayersState.map((array) => {
    return (
      <Card key={Math.random().toString()}>
        <img className={styles.imageCss} src={array.image}></img>
        <li className={styles.content}>Name: {array.name}</li>
        <li className={styles.content}>Age: {array.age}</li>
        <li className={styles.content}>Position: {array.position}</li>
      </Card>
    );
  });

  const addPlayerBtnHandler = () => {
    setAddPlayerBtn((addPlayerbtn) => !addPlayerbtn);
  };

  const addPlayerToForm = (name, age, position) => {
    console.log(age, name, position);
    setBarcaPlayerState([...barcaPlayersState, { name, age, position }]);
    console.log(barcaPlayersState);
  };

  return (
    <section>
      <Fragment>
        <button onClick={addPlayerBtnHandler} className={styles.btnStyle}>
          Add Player Form
        </button>
        {addPlayerbtn && <AddPlayerForm addPlayerToForm={addPlayerToForm} />}
        {arrayHandler}
      </Fragment>
    </section>
  );
};

export default BarcaPlayes;
