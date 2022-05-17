import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";

interface ButtonPropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

const Button: FC<ButtonPropsType> = ({ title, ...props }) => {
  return (
    <button {...props} className={styles.button}>
      {title}
    </button>
  );
};

export default Button;
