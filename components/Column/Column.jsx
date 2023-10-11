import { getAlignItems, getPaddingTop, getPaddingBottom, getPaddingLeft, getPaddingRight } from "utils/layout";

export const Column = ({
  children,
  width,
  textColor,
  backgroundColor,
  verticalAlignment,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const widthStyle = width ? { minWidth: width, flexGrow: 1 }
    : { flexGrow: 1, flexBasis: 0 };

  return (
    <div
      data-aos="fade-up" style={{ ...widthStyle, ...textColorStyle, ...backgroundColorStyle }}
      className={`${getAlignItems(verticalAlignment)} ${getPaddingTop(paddingTop)} ${getPaddingBottom(paddingBottom)} ${getPaddingLeft(paddingLeft)} ${getPaddingRight(paddingRight)}`}>
      {children}
    </div>
  )
}
