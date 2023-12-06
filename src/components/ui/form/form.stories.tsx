import type { Meta, StoryObj } from "@storybook/react";

import { Form } from "@/components/ui";
import { ProfileForm } from "./profile-form";

const meta: Meta<typeof Form> = {
  component: Form,
  title: "Components/Form",
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Form>;

/** A checkbox with some text around it. */
export const Default: Story = {
  render: (_) => <ProfileForm />,
};
