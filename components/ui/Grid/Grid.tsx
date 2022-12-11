import { FC, ReactNode } from "react";
import s from "./Grid.module.scss";
import cn from "classnames";

interface Props {
  children: ReactNode[];
  layout?: "A" | "B" | "C";
}

const Grid: FC<Props> = ({ children, layout = "A" }: any) => {
  const rootClassName = cn(s.root, {
    [s.layoutA]: layout === "A",
    [s.layoutB]: layout === "B",
    [s.layoutC]: layout === "C",
  });

  return <div className={rootClassName}>{children}</div>;
};

export default Grid;
