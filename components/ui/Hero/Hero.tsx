import { FC } from "react";
import s from "./Hero.module.scss";

interface Props {
}

const Hero: FC<Props> = () => {
  return <div className={s.root}></div>;
};

export default Hero;
