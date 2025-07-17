import { ButtonType, ButtonVariant } from "@/types";
import React, { FunctionComponent } from "react";
import classNames from "classnames/bind";

import $ from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonType;
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
}

const Button: FunctionComponent<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  loading = false,
}) => {
  const cx = classNames.bind($);
  return (
    <button
      // TODO: Add conditional classNames
      // - Must have a condition to set the '.primary' className
      // - Must have a condition to set the '.secondary' className
      // - Display loading spinner per demo video. NOTE: add data-testid="loading-spinner" for spinner element (used for grading)
      className={cx({ button: true, secondary: variant === "secondary", primary: variant === "primary" })}
      type={type}
      onClick={onClick}
      disabled={loading}
    >
      {loading && (
        <span data-testid="loading-spinner" className={$.spinner} />
      )}
      {!loading && children}
    </button>
  );
};

export default Button;
