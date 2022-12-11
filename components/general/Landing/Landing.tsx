import { Container, Button } from "@components/ui";
import { motion } from "framer-motion";
import React from "react";
import s from "./Landing.module.scss";
import LandingContainer from "./LandingContainer/LandingContainer";
import { variantsThree } from "@components/animation/animation";

const landingInfo = {
  firstBrand: {
    title: "Increase concentration, health and physical performance",
    button: "PURE",
    color: "outline",
    image: "/pure.svg",
  },
  secondBrand: {
    title: "Increase concentration, health and physical performance",
    button: "PERFORMANCE",
    color: "outline",
    image: "/performance.svg",
  },
  thirdBrand: {
    title: "Increase concentration, health and physical performance",
    button: "APPEARANCE",
    color: "outline",
    image: "/appearance.svg",
  },
};

interface LayoutProps {
  children?: React.ReactNode;
}

const Landing: React.FC<LayoutProps> = ({ children }) => {
  const [page, setPages] = React.useState(0);
  const timer = 10000;

  setInterval(function () {
    setPages(() => page + 1);
  }, timer);

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <LandingContainer
          title={landingInfo.firstBrand.title}
          button={landingInfo.firstBrand.button}
          color={landingInfo.firstBrand.color}
          image={landingInfo.firstBrand.image}
        ></LandingContainer>
      );
    } else if (page === 1) {
      return (
        <LandingContainer
          title={landingInfo.secondBrand.title}
          button={landingInfo.secondBrand.button}
          color={landingInfo.secondBrand.color}
          image={landingInfo.secondBrand.image}
        ></LandingContainer>
      );
    } else
      return (
        <LandingContainer
          title={landingInfo.thirdBrand.title}
          button={landingInfo.thirdBrand.button}
          color={landingInfo.thirdBrand.color}
          image={landingInfo.thirdBrand.image}
        ></LandingContainer>
      );
  };
  return (
    // <motion.div variants={variantsThree} animate={"show"} initial="hide">
    <Container layout="A" bgColor="primary">
      <motion.div
        className={s.display}
        variants={variantsThree}
        animate={"show"}
        initial="hide"
      >
        {pageDisplay()}
        <div className={s.callToAction}>
          <Button
            buttonStyle="E"
            isIconLeftBig
            image="/find-your-fit.svg"
            color="outline"
          >
            FIND YOUR FIT
          </Button>
          <Button
            buttonStyle="E"
            isIconLeftBig
            image="/bagWhite.svg"
            color="outline"
          >
            BUY HERE
          </Button>
        </div>
      </motion.div>
    </Container>
    // </motion.div>
  );
};

export default Landing;
