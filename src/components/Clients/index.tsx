/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
import React from "react";
import styles from "./Clients.module.scss";

const Clients = () => (
  <div id="clients" className={styles.clientContainer}>
    <div className={styles.clientContent}>
      <h2>Clientes</h2>
      <div className={styles.clientList}>
        <img
          style={{ filter: "invert(1)" }}
          src="/assets/Clients/cliente1.png"
          alt=""
        />
        <img src="/assets/Clients/cliente2.jpeg" alt="" />
        <img
          style={{ filter: "invert(1)" }}
          src="/assets/Clients/cliente3.png"
          alt=""
        />
      </div>
    </div>
  </div>
);
export default Clients;
