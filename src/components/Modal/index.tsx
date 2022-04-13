/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import React from "react";
import styles from "./Modal.module.scss";

import { Videos } from "./video";
interface IModal {
  close: () => void;
}

const Modal = ({ close }: IModal) => (
  <div className={styles.modalContainer}>
    <div className={styles.modalContent}>
      <button onClick={() => close()}>x</button>
      <div className={styles.modalVideo}>
        {Videos.filter((video) => video.id === 1).map((filteredVideo) => (
          <video
            key={filteredVideo.id}
            autoPlay={true}
            controls
            width="500px"
            height="500px"
            loop
          >
            <source src={filteredVideo.src} type="video/mp4" />
          </video>
        ))}
      </div>
    </div>
  </div>
);

export default Modal;
