import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline", "btn--test"]; //array of styles for the button

const SIZES = ["btn--medium", "btn--large"]; // array for the size of the button

interface Props {
  // in order to assign the type for each property of button in typescript you must assign it like this
  buttonStyle: string;
  buttonSize: string;
  onClick?: MouseEventHandler; //question mark makes the props optional(you dont HAVE to put the prop when making a Button in navbar for example)
  type?: undefined; //maybe works, keep coding and see if everything continues to work. Not sure why undefined works in specific
}

export const Button: React.FC<Props> = ({
  // REact.FC<Props> is how you use the above code
  buttonStyle,
  buttonSize,
  onClick,
  type,
  children, //children auto assigned to React.ReactNode
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle) //checks if the button was assigned a specific button style and if not assigns the first style from the style array
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]; // checks if the button was assigned a size and if not assigns the first size from the size array

  return (
    // button component returns a Link tag with a button tag inside
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`} //the classname will be equal to the btn + the result of checkButtonStyle + the result of CheckButtonSize
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
