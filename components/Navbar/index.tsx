import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Drawer } from "../Drawer";
import styles from "./Navbar.module.scss";

const Navbar: NextPage = () => {
//   const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
        {/* <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)} /> */}
      <header className={styles.header}>
        <nav className="container">
          <Link href="/">
            <p>Learning English</p>
          </Link>
          {/* <div onClick={() => setOpenDrawer(true)}></div> */}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
