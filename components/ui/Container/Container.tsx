import { ReactNode, FC, ComponentType, HTMLAttributes } from "react";
import s from "./Container.module.scss";
import cn from "classnames";

interface Props {
  children: ReactNode | ReactNode[];
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
  layout: "A" | "B" | "C" | "D";
  bgColor: "primary" | "secondary";
}

const Container: FC<Props> = ({
  children,
  el: Component = "div",
  layout = "A",
  bgColor = "primary",
}) => {
  const rootClassName = cn(s.root, {
    [s.layoutA]: layout === "A",
    [s.layoutB]: layout === "B",
    [s.layoutC]: layout === "C",
    [s.layoutD]: layout === "D",
    [s.bgColorPrimary]: bgColor === "primary",
    [s.bgColorSecondary]: bgColor === "secondary",
  });
  return <Component className={rootClassName}>{children}</Component>;
};

export default Container;
