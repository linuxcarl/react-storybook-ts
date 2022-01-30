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
   /**
   * font-color by text in the label
   */
  fontColor?: string;
}
export const Label = ({
  label = "label",
  size = "normal",
  color,
  allCaps = false,
  fontColor,
  ...props
}: LabelProps) => {
  return (
    <label className={`label ${size}  ${color ? 'text-'+color: ''} ${allCaps ? 'upper': ''}`} style={{color:fontColor}} {...props}>
      {label}
    </label>
  );
};
