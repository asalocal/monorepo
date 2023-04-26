import Button from "@kaiju-ui/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    children: "Button",
  },
};

export const Secondary = {
  args: {
    children: "Button",
  },
};

export const Large = {
  args: {
    size: "large",
    children: "Button",
  },
};

export const Small = {
  args: {
    size: "small",
    children: "Button",
  },
};
