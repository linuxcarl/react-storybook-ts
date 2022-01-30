import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Label } from "../../components/Label";
import "./label.css";

export default {
  title: "UI/Label",
  component: Label,
  argTypes: {
    color: {
      control: "select",
    },
  },
} as ComponentMeta<typeof Label>;
const Template: ComponentStory<typeof Label> = (props) => <Label {...props} />;

const basic = Template.bind({});
basic.args = {
  size: "normal",
  label: "My first Label",
};
const tertiary = Template.bind({});
tertiary.args = {
  size: "normal",
  label: "with color tertiary",
  color: "tertiary"
};

const CustomFontolor = Template.bind({});
CustomFontolor.args = {
  size: "h1",
  label: "label with fontColor",
  fontColor: "#1c00ff",
};
export { basic, tertiary, CustomFontolor };
