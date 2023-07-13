import React from "react";
import cx from "classnames";
import "./component-name.scss";

/**
 * ComponentName is a component that displays the name of the component.
 * Use className prop to give it some kind of background - image or color.
 */
export const ComponentName = ({ children, className }) => {
  return <h1 className={cx("monday-storybook-component-name", className)}>{children}</h1>;
};

export default ComponentName;
