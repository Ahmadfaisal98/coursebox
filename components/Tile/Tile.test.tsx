import React from "react";

import { render } from "@/test-utils";

import { Tile } from "./Tile";

describe("Tile test cases", () => {
  it("Tile render check", () => {
    const { asFragment } = render(
      <Tile header="Lorem ipsum dolor sot amet">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae,
        corporis, nulla omnis ab ut quisquam soluta velit sapiente quam error
        obcaecati ea dicta consectetur magni! Tempore, temporibus quas at modi,
        illo quia similique, saepe accusamus quibusdam expedita quod a ipsam
        voluptatum nulla fugiat nisi fuga quaerat doloribus veniam sed!
      </Tile>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
