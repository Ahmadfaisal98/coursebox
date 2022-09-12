import { expect } from "@storybook/jest";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";
import { screen } from "@storybook/testing-library";

import { CenteredTile } from "./CenteredTile";

export default {
  title: "Content/Tile",
  component: CenteredTile,
} as ComponentMeta<typeof CenteredTile>;

export const CenteredTileExample: ComponentStoryObj<typeof CenteredTile> = {
  play: async ({ args }) => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
  },
  args: {
    header: "Lorem ipsum dolor sit amet",
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
  },
};
