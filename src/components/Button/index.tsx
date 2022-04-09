import React from "react";
import styles from "./Button.module.scss";

interface Button {
  onclick: () => void;
  label: string;
}

const ButtonAction = ({ onclick, label }: Button) => (
  <div className={styles.buttonContainer}>
    <button onClick={onclick}>{label}</button>
  </div>
);

export default ButtonAction;
