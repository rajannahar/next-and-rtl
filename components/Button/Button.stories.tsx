// Button.stories.js|jsx

import React from "react";

import { Button, ButtonProps } from ".";

/**
 * <Button variant="primary" disabled={false} onClickHandler={mockOnClick}>
        This is a button
      </Button>
 */

const Template: Story = (args: ButtonProps) => <Button {...args} />;
const args = {
  children: "my button",
  disabled: false,
};
const argTypes = {
  onClick: { action: "clicked" },
  variant: {
    options: ["primary", "secondary", "error"],
    defaultValue: "primary",
    control: {
      type: "select",
    },
  },
  disabled: false,
};

export const Default = Template.bind({});

export default {
  title: "components/Button",
  component: Button,
  args,
  argTypes,
} as Meta;
