import React from "react";
import { Link, To } from "react-router-dom";

interface ButtonType {
  innerText: string;
  type: "route" | "button";
  className?: string;
  isSubmit?: boolean;
  linkTo?: To;
}

function CTA({
  type,
  innerText,
  className,
  isSubmit = false,
  linkTo,
}: ButtonType): JSX.Element {
  type ButtonVariantType = {
    [key: string]: JSX.Element;
  };

  const styleVariation: ButtonVariantType = {
    route: (
      <Link className={className} to={linkTo !== undefined ? linkTo : "/"}>
        {innerText}
      </Link>
    ),
    button: (
      <button
        className={`button ${className}`}
        type={type !== "route" && isSubmit ? "submit" : "button"}
      >
        {innerText}
      </button>
    ),
  };

  return styleVariation[type];
}

export default CTA;
