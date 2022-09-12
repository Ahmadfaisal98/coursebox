import { expect } from "@storybook/jest";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { screen } from "@storybook/testing-library";

import { Tile } from "./Tile";

export default {
  title: "Content/Tile",
  component: Tile,
} as ComponentMeta<typeof Tile>;

export const BasicTile: ComponentStoryObj<typeof Tile> = {
  play: async ({ args }) => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
  },
  args: {
    header: "Lorem ipsum dolor sit amet",
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est quis voluptate eligendi, quas natus voluptatibus ad illo, blanditiis commodi repellendus cum nam rerum amet nihil molestias nobis incidunt atque ex hic possimus fugit. Alias magnam libero distinctio ullam itaque ad cumque rem corporis doloremque modi consequuntur, molestias, dolore quasi, saepe dolor assumenda inventore. At aliquid enim veniam necessitatibus officia quas corporis debitis explicabo ipsum. Debitis beatae ad nulla, adipisci quas aut quisquam rem porro maxime voluptate suscipit doloremque dolorum illo architecto. Eaque, voluptatibus cupiditate aut beatae repudiandae eum voluptas. Esse molestiae neque temporibus dolores vero quibusdam eos quam dolorem.`,
  },
};
