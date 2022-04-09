import Link from "next/link";
import React from "react";
import styles from "./Button.module.scss";

interface Button {
  label: string;
  url: string;
}

const ButtonAction = ({ url, label }: Button) => (
  <div className={styles.buttonContainer}>
    <Link href={`${url}`}>
      <a target="_blank">{label}</a>
    </Link>
  </div>
);

export default ButtonAction;
