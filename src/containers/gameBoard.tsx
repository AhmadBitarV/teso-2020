import { useEffect, useState } from "react";
import styled from "styled-components";

import styles from "./gameBoard.module.scss";

import Cell from "../components/cell";
import Button from "../buttons/button";

const GameBoard = () => {
  const rows = useState<number>(10); // Dynamic rows ;)
  const columns = useState<number>(10); // Dynamic columns ;) but CSS was optimized to take 10 col at max so kindly don't break it:))

  const [direction, setDirection] = useState<number>(90);
  const [x, setX] = useState<number>(1);
  const [y, setY] = useState<number>(1);
  const [currentNumber, setCurrentNumber] = useState(1);
  const [currentcells, setCurrentCells] = useState(
    new Array(rows[0] * columns[0]).fill(false)
  );

  useEffect(() => {
    updateCells(0);
  }, []);

  let cells = [];
  cells = currentcells.map((cell) => {
    return (
      <Cell direction={direction} hasPointer={cell} key={Math.random() * 5} />
    );
  });

  // Moving Forward Functionality
  const clickedRight = () => {
    switch (direction) {
      case 90:
        if (x < columns[0]) {
          updateCells(currentNumber);
          setX(x + 1);
          setCurrentNumber(currentNumber + 1);
        } else if (x === columns[0]) {
          setDirection(direction + 90);
        }
        break;
      case 180:
        if (y < rows[0]) {
          updateCells(currentNumber + columns[0] - 1);
          setY(y + 1);
          setCurrentNumber(currentNumber + columns[0]);
        } else if (y === rows[0]) {
          setDirection(direction + 90);
        }
        break;

      case 270:
        if (x > 1) {
          updateCells(currentNumber - 2); // I have no idea why it worked with -2 and failed with -1 :DDDD
          setX(x - 1);
          setCurrentNumber(currentNumber - 1);
        } else if (x === 1) {
          setDirection(0);
        }
        break;

      case 0:
        if (y > 1) {
          updateCells(currentNumber - columns[0] - 1);
          setY(y - 1);
          setCurrentNumber(currentNumber - columns[0]);
        } else if (y === 1) {
          setDirection(90);
        }
        break;
    }
  };

  // Turning Right Functionality
  const turnRight = () => {
    setDirection(90);
  };

  // Helper Function: Updating active cell
  const updateCells = (index: number) => {
    let cells = new Array(rows[0] * columns[0]).fill(false);
    cells[index] = true;
    setCurrentCells(cells);
  };

  const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(${columns[0]}, var(--cell-size));
    grid-template-rows: repeat(${rows[0]}, var(--cell-size));
    justify-content: center;
    align-content: center;
  `;

  return (
    <div className={styles.gameBoard}>
      <Board id={"container"}>{cells}</Board>
      <div className={styles.gameBoard__buttons}>
        <Button clicked={turnRight}>Turn right</Button>
        <Button clicked={clickedRight}>Move Forward</Button>
      </div>
    </div>
  );
};

export default GameBoard;
