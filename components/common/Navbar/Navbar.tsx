import { FC, useState } from "react";
import Link from "next/link";
import s from "./Navbar.module.scss";
import { useUI } from "@components/ui/context";
import { Sidebar, Button } from "@components/ui";
import { Usernav } from "@components/common";
import { motion } from "framer-motion";
import { CartSideBar } from "@components/cart";
import { variants } from "@components/animation/animation";
import Image from "next/image";
import useCart from "@framework/cart/use-cart";
import { LineItem } from "@common/types/cart";

const Navbar: FC = () => {
  const {
    isSidebarOpen,
    isNavbarOpen,
    closeSidebar,
    closeNavbar,
    openSidebar,
    openNavbar,
  } = useUI();

  const { data } = useCart();

  const itemsCount =
    data?.lineItems.reduce((count: number, item: LineItem) => {
      return count + item.quantity;
    }, 0) ?? 0;

  return (
    <motion.nav
      variants={variants}
      animate={"show"}
      initial="hide"
      className={s.navbar}
    >
      <div className={s.navbarContainer}>
        <div className={s.navbarHamburger}>
          <button onClick={openNavbar}>
            <Image src="/navbar.svg" width={27} height={27} alt={""}></Image>
          </button>
          <div>
            <Sidebar
              layout="Left"
              initial={{
                x: "-100%",
                opacity: 1,
              }}
              animate={{ opacity: 1, x: "0px" }}
              exit={{ opacity: 1, x: "-100%" }}
              onClose={closeNavbar}
              isOpen={isNavbarOpen}
            >
              <Usernav />
            </Sidebar>
          </div>
        </div>
        <div className={s.navbarLogo}>
          <Link href="/">
            <Image
              src="/plntkn-logo-zonder-bal.svg"
              width={98}
              height={30}
              alt={""}
            ></Image>
          </Link>
        </div>
        <div className={s.navbarButtons}>
          <Link href="/">
            <Button
              isIconLeft
              image="/pure.svg"
              color="light-green"
              buttonStyle="A"
            >
              PURE
            </Button>
          </Link>
          <Link href="/">
            <Button
              isIconLeft
              image="/performance.svg"
              color="dark-blue"
              buttonStyle="A"
            >
              PERFORMANCE
            </Button>
          </Link>
          <Link href="/">
            <Button
              image="/appearance.svg"
              isIconLeft
              color="light-blue"
              buttonStyle="A"
            >
              APPEARANCE
            </Button>
          </Link>
        </div>

        <div className={s.item} onClick={openSidebar}>
          <Image src="/BagGreen.svg" width={28} height={28} alt={""}></Image>
          {itemsCount > 0 && <span className={s.bagCount}>{itemsCount}</span>}
        </div>

        <Sidebar
          key="box"
          layout="Right"
          initial={{
            x: "100%",
            opacity: 1,
          }}
          animate={{ opacity: 1, x: "0px" }}
          exit={{ opacity: 1, x: "100%", transition: { duration: 1 } }}
          onClose={closeSidebar}
          isOpen={isSidebarOpen}
        >
          <CartSideBar></CartSideBar>
        </Sidebar>
      </div>
    </motion.nav>
  );
};

export default Navbar;
