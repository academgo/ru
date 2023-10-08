import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";
import { getMarginTop, getMarginBottom, getPaddingTop, getPaddingBottom } from "utils/layout";

export const Heading = ({ textAlign, content, level, textColor, backgroundColor, marginTop, marginBottom, paddingTop, paddingBottom }) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-[1220px] mx-auto ${getMarginTop(marginTop)} ${getMarginBottom(marginBottom)} ${getPaddingTop(paddingTop)} ${getPaddingBottom(paddingBottom)} ${getFontSizeForHeading(level)} ${getTextAlign(textAlign)}`,
    style: { ...textColorStyle, ...backgroundColorStyle },
    "data-aos": "fade-up"
  });
  return tag;
};