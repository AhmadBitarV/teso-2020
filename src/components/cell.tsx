import styles from "./cell.module.scss";
import Pointer from "./pointer";

const Cell: React.FC<{ hasPointer: boolean; direction: number }> = (props) => {
  let pointer = null;
  if (props.hasPointer) {
    pointer = <Pointer direction={props.direction} />;
  }
  return <div className={styles.cell}>{pointer}</div>;
};

export default Cell;
