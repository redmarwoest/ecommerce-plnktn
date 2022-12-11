import { useState } from "react";
import s from "./Accordion.module.scss";
import Image from "next/image";
import { useSpring, animated } from "react-spring";
function Accordion(props: any) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };
  //conditional styling
  const styles = {
    //if open is true, show content
    accordionTitle: {
      color: open ? "#10d6f5" : "#fff",
    },
  };
  //open animation with react spring
  const openAnimation = useSpring({
    from: { opacity: "0", maxHeight: "25px" },
    to: { opacity: "1", maxHeight: open ? "120px" : "25px" },
    config: { duration: "300" },
  });
  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: "rotate(0deg)",
      color: "#ffff",
    },
    to: {
      transform: open ? "rotate(270deg)" : "rotate(90deg)",
      color: open ? "#10d6f5" : "#fff",
    },
    config: { duration: "120" },
  });
  return (
    <animated.div className={s.accordionItem} style={openAnimation}>
      <div className={s.accordionHeader} onClick={toggleHandler}>
        <p>
          <strong>{props.title}</strong>
        </p>
        <animated.i style={iconAnimation}>
          <Image src="/arrow-right.svg" alt={""} width={12} height={12}></Image>
        </animated.i>
      </div>
      <p className={s.accordionContent}>{props.text}</p>
    </animated.div>
  );
}
export default Accordion;
