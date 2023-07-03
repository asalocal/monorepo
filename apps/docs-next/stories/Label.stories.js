import Label from "@kaiju-ui/label";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Label",
  component: Label,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
    },
    color: {
      control: "color",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    children: "Label",
  },
};
