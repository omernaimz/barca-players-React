import styles from "./Card.moudle.css";

const Card = (props) => {
  return <ul className={styles.ul}>{props.children}</ul>;
};

export default Card;
