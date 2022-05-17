import { FC, InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputPropsType extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}
const Input: FC<InputPropsType> = ({ placeholder, ...props }) => {
  return (
    <input placeholder={placeholder} {...props} className={styles.Input} />
  );
};

export default Input;
