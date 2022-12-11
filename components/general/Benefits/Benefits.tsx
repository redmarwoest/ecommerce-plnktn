import React from "react";
import s from "./Benefits.module.scss";
// import Lottie from "react-lottie";
// import animation from "../../../public/lottie/animaton.json";

interface LayoutProps {
  children?: React.ReactNode;
}

const benefits = [
  {
    number: "1.",
    title: "Plant based",
    paragraph: "Lorum ipsum toras mi pisum",
    // lottie: animation,
  },
  {
    number: "2.",
    title: "Plant based",
    paragraph: "Lorum ipsum toras mi pisum",
    // lottie: animation,
  },
  {
    number: "3.",
    title: "Plant based",
    paragraph: "Lorum ipsum toras mi pisum",
    // lottie: animation,
  },
  {
    number: "4.",
    title: "Plant based",
    paragraph: "Lorum ipsum toras mi pisum",
    // lottie: animation,
  },
];

const Benefits: React.FC<LayoutProps> = ({ children }) => {
  //   const defaultOptions = {
  //     loop: true,
  //     autoplay: true,
  //     animationData: benefits,
  //     rendererSettings: {
  //       preserveAspectRatio: "xMidYMid slice",
  //     },
  //   };
  return (
    <section className={s.root}>
      <div className={s.grid}>
        {benefits.map((benefit) => (
          <div key={benefit.number} className={s.gridColumn}>
            <h2>{benefit.number}</h2>
            <h2>{benefit.title}</h2>
            <p>{benefit.paragraph}</p>
            <div>{/* <Lottie options={defaultOptions}></Lottie> */}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
