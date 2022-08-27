import React, { useState } from "react";
import styles from "./Drawer.module.scss";

export const Drawer = ({
  open = false,
  onClose = () => {},
}: {
  open?: boolean;
  onClose: () => void;
}) => {
  return (
    <>
      <div
        onClick={onClose}
        className={`${styles["background-drawer"]} ${
          open ? styles.active : ""
        } `}
      ></div>
      <div className={`${styles.wrapper} ${open ? styles.active : ""}`}>
        <div style={{ padding: "1em" }}>
          <div onClick={onClose}>Cerrar</div>
        </div>
      </div>
    </>
  );
};
