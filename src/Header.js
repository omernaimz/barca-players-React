import { Fragment } from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.title}>
      <h1>FC Barcelona</h1>
      <h2>Mes Que un Club</h2>
    </div>
  );
};

export default Header;
