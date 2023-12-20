import type { Meta, StoryObj } from "@storybook/react";

import { NFTCard } from "ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Example/NFTCard",
  component: NFTCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
} satisfies Meta<typeof NFTCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    image: "http://localhost:3002/images/ant.png",
    title: "designer bear",
    creator: {
      avatar: "http://localhost:3002/images/cat.png",
      name: "animakid",
    },
  },
};

export const Dark: Story = {
  args: {
    image: "http://localhost:3002/images/elephant2.png",
    title: "designer bear",
    theme: "dark",
    creator: {
      avatar: "http://localhost:3002/images/panda.png",
      name: "animakid",
    },
  },
};
