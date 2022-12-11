import Link from "next/link";
import { FC } from "react";
import { useUI } from "@components/ui/context";
import s from "./Usernav.module.scss";
import { motion } from "framer-motion";
import { container, item } from "@components/animation/animation";
import Image from "next/image";

const links = [
  { header: "Home", link: "/", image: "/convince-me.svg" },
  { header: "Pure", link: "/products", image: "/pure.svg" },
  { header: "Appearance", link: "/", image: "/appearance.svg" },
  { header: "Performance", link: "", image: "/performance.svg" },
  { header: "All products", link: "", image: "/bagWhite.svg" },
  { header: "Find your fit", link: "/survey", image: "/find-your-fit.svg" },
  { header: "Articles", link: "/articles", image: "/reviews.svg" },
];

const Usernav: FC = () => {
  const { closeNavbar } = useUI();
  return (
    <div className={s.root}>
      <Image
        onClick={closeNavbar}
        src="/navbarWhite.svg"
        width={30}
        height={30}
        alt={""}
        className={s.closeNavbar}
      ></Image>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {links.map((link) => (
          <motion.li onClick={closeNavbar} variants={item} key="link">
            <div className={s.div}>
              <Image src={link.image} width={24} height={24} alt={""}></Image>
              <Link href={link.link}>
                <p>{link.header}</p>
              </Link>
            </div>
            <hr />
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Usernav;
