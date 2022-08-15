import React, { ReactNode } from "react";
import styles from "./Table.module.scss";

const Table = ({
  theads,
  tdata = [],
  tbody = null
}: {
  theads: string[];
  tdata?: { children: ReactNode }[];
  tbody?: ReactNode | ReactNode[]
}) => {
  return (
    <div className={styles.wrapper_table}>
      <table className={styles.table}>
        <thead>
          <tr>
            {theads.map((thead, i) => (
              <th key={i}>{thead}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tbody}
          {tdata.map((data, i) => (
            <tr key={i}>
              {data.children}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const Td = ({
  isBold = false,
  children,
}: {
  isBold?: boolean;
  children: ReactNode;
}) => {
  return <td className={isBold ? styles.bold : ""}>{children}</td>;
};

export default Table;
