/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import * as React from "react";
import s from "./Recipes.module.scss";
import { AnimateSharedLayout, motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import styled from "styled-components";
import Recipe from "./Recipe/Recipe";

const data = [
  {
    id: 1,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsusm toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",
    page: 0,
    button: "knop",
  },
  {
    id: 2,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsdum toras  pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",
    page: 1,
    button: "knop",
  },
  {
    id: 3,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsurm toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",

    page: 2,
    button: "knop",
  },
  {
    id: 4,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsuam toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",

    page: 3,
    button: "knop",
  },
  {
    id: 5,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsdum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",
    page: 4,
    button: "knop",
  },
  {
    id: 6,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsurwm toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",
    page: 5,
    button: "knop",
  },
  {
    id: 7,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsdasum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",
    page: 6,
    button: "knop",
  },
  {
    id: 8,
    logo: "/appearance.svg",
    // image: algea,
    tekst:
      "Lorum ipsgwerum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum",
    page: 7,
    button: "knop",
  },
];

const Recipes: React.FC<any> = () => {
  const [page, setPage] = React.useState(0);

  const Button: any = styled.button`
    background-color: #f5f8f8;
    border: 1px solid #ffffff;
    transition: 0.3s;
    cursor: pointer;
    &:hover {
      background-color: #283593;
      transition: 0.3s;
    }  
}
  `;

  const ButtonToggle: any = styled(Button)`
    transition: 0.3s;
    ${({ active }) =>
      active &&
      `
    background-color: #E4EBEB!important;
    transition: 0.3s;
  
  `}
  `;

  function ToggleGroup() {
    const [active, setActive] = React.useState(data[page].tekst);
    return (
      <div className={s.brandContainerGrid}>
        {data.map((type) => (
          <ButtonToggle
            key={type.id}
            active={active === type.tekst}
            onClick={() => {
              setPage(type.page);
              setActive(type.tekst);
            }}
          >
            <Image src={type.logo} width={100} height={100} alt=""></Image>
          </ButtonToggle>
        ))}
      </div>
    );
  }

  const PageDisplay = () => {
    if (page === 0) {
      return (
        <Recipe
          image={data[0].image}
          logo={data[0].logo}
          tekst={data[0].tekst}
          button={data[0].button}
        ></Recipe>
      );
    } else if (page === 1) {
      return (
        <Recipe
          image={data[1].image}
          logo={data[1].logo}
          tekst={data[1].tekst}
          button={data[1].button}
        ></Recipe>
      );
    } else if (page === 2) {
      return (
        <Recipe
          image={data[2].image}
          logo={data[2].logo}
          tekst={data[2].tekst}
          button={data[2].button}
        ></Recipe>
      );
    } else if (page === 3) {
      return (
        <Recipe
          image={data[3].image}
          logo={data[3].logo}
          tekst={data[3].tekst}
          button={data[3].button}
        ></Recipe>
      );
    } else if (page === 4) {
      return (
        <Recipe
          image={data[4].image}
          logo={data[4].logo}
          tekst={data[4].tekst}
          button={data[4].button}
        ></Recipe>
      );
    } else if (page === 5) {
      return (
        <Recipe
          image={data[5].image}
          logo={data[5].logo}
          tekst={data[5].tekst}
          button={data[5].button}
        ></Recipe>
      );
    } else if (page === 6) {
      return (
        <Recipe
          image={data[6].image}
          logo={data[6].logo}
          tekst={data[6].tekst}
          button={data[6].button}
        ></Recipe>
      );
    } else if (page === 7) {
      return (
        <Recipe
          image={data[7].image}
          logo={data[7].logo}
          tekst={data[7].tekst}
          button={data[7].button}
        ></Recipe>
      );
    } else {
      return;
    }
  };

  return (
    <section className={s.root}>
      <div className={s.header}>
        <h4>Companies that we inspire</h4>
      </div>
      <AnimateSharedLayout>
        <AnimatePresence>
          <motion.div variants={container} className={s.brandContainer}>
            <ToggleGroup />
            <motion.div
              key={page}
              variants={variants}
              animate={"show"}
              initial="hide"
              className={s.brandContainerDisplay}
            >
              <motion.div
                variants={variants}
                animate={"show"}
                initial="hide"
                style={{ width: "100%", height: "100%", position: "relative" }}
              >
                <img
                  src={data[page].image}
                  alt=""
                  objectFit="cover"
                  layout="fill"
                />
                {PageDisplay()}
              </motion.div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </AnimateSharedLayout>
    </section>
  );
};

export default Recipes;

export const variants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 2,
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    y: 0,
    opacity: 0,
  },
};

const container = {
  show: {
    transition: {
      staggerChildren: 2,
    },
  },
};
