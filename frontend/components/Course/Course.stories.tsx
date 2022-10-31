import { expect } from "@storybook/jest";
import { screen } from "@storybook/testing-library";
import { ComponentStoryObj, ComponentMeta } from "@storybook/react";

import { Course } from "./Course";

export default {
  title: "Content/Course",
  component: Course,
} as ComponentMeta<typeof Course>;

export const BasicCourse: ComponentStoryObj<typeof Course> = {
  play: async () => {
    await expect(screen.getByRole("heading")).toBeInTheDocument();
    await expect(screen.getByRole("img")).toBeInTheDocument();
    await expect(screen.getByRole("link")).toBeInTheDocument();
  },
  args: {
    header: "Udemy",
    link: "/udemy",
    imageProps: {
      width: 1368,
      height: 770,
      alt: "Udemy",
      src: "https://res.cloudinary.com/dyrzlsi0q/image/upload/v1667190431/medium_udemy_87853c54bd.png",
    },
    children: (
      <>
        Udemy is a massive open online course provider, and its learning
        experience arranges coursework into a series of modules and lessons that
        can include videos, text notes and assessment tests. Udemy video player
        has functional features like closed captioning and note-taking
        functions.
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
  },
};
