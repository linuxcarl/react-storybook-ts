export interface LabelProps {
  /**
   * Label is by text in the tag
   */
  label: string;
  /**
   * size is a class by font-size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * allCaps change string by upper case
   */
  allCaps?: false | true;
  /**
   * color by text in the label
   */
  color?: "primary" | "secondary" | "tertiary";
}
export const Label = ({
  label = "label",
  size = "normal",
  color = "primary",
  allCaps = false,
  ...props
}: LabelProps) => {
  return (
    <label className={`${size} text-${color} ${allCaps ? 'upper': ''} `} {...props}>
      {label}
    </label>
  );
};
