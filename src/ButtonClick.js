import styles from "./ButtonClick.module.css";

const ButtonClick = (props) => {
  return (
    <button className={styles.btn} onClick={props.onClickToGetData}>
      {props.contentToShow}
    </button>
  );
};

export default ButtonClick;
