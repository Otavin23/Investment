import type { Meta, StoryObj } from "@storybook/react";
import CardInvestment from "./index";

const meta = {
  title: "Example/CardInvestment",
  component: CardInvestment,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardInvestment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    date: new Date(),
    owner: "Otavinho",
    value: 300,
  },
};
