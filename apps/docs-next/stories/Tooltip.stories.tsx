import React from "react";
import Tooltip from "@kaiju-ui/tooltip";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

export default {
  title: "Example/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
};

export const Primary = (args) => {
  return (
    <>
      <div
        style={{
          padding: "30px",
        }}
      >
        <Tooltip text={args.text}>Any</Tooltip>
      </div>
    </>
  );
};
