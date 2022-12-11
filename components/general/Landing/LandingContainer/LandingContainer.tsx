import Link from "next/link";
import React from "react";
import Button from "../../../ui/Button/Button";
import s from "./LandingContainer.module.scss";
import Image from "next/image";

interface Props {
  color: any;
  image: any;
  button: string;
  title: string;
}

const LandingContainer: React.FC<Props> = ({ color, image, button, title }) => {
  return (
    <>
      <canvas className={s.canvas}></canvas>
      <div className={s.container}>
        <div className={s.variety}>
          <Link href="/">
            <Button isIconLeft image={image} color={color} buttonStyle="A">
              {button}
            </Button>
          </Link>
          <div className={s.productInformationBenefits}></div>
          <h1>{title}</h1>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default LandingContainer;
