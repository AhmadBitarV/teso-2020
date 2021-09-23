import { FaHandPointer } from "react-icons/fa";
import styles from "./pointer.module.scss";

const pointer: React.FC<{ direction: number }> = (props) => {
  return (
    <FaHandPointer
      className={styles.icon}
      style={{ transform: `rotate(${props.direction}deg)` }}
    />
  );
};

export default pointer;
