/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import React from "react";
import styles from "./Modal.module.scss";

interface IModal {
  close: () => void;
  videoSrc: string;
}

const Modal = ({ close, videoSrc }: IModal) => (
  <div className={styles.modalContainer}>
    <div className={styles.modalContent}>
      <button onClick={() => close()}>x</button>
      <div className={styles.modalVideo}>
        <video autoPlay={true} controls width="500px" height="500px" loop>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>
);

export default Modal;
