import { render } from "@testing-library/react";
import React from "react";
import * as ReactDOM from "react-dom";
import GameBoard from "./gameBoard";

describe("Testing Buttons functionality", () => {
  let container: HTMLDivElement;
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<GameBoard />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Should correctly render initial documents", () => {});
});
