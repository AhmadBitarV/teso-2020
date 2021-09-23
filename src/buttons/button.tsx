import styles from "./button.module.scss";

const Button: React.FC<{ clicked?: () => void }> = (props) => {
  return (
    <button
      onClick={props.clicked}
      className={`${styles.button} ${styles.button__orange}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
