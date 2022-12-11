import { FC } from "react";
import s from "./Header.module.scss";
import cn from "classnames";

interface Props {
  header: string;
  layout: "top" | "bottom";
}

const Header: FC<Props> = ({ header, layout = "A" }) => {
  const rootClassName = cn(s.root, {
    [s.layoutTop]: layout === "top",
    [s.layoutBottom]: layout === "bottom",
  });
  return (
    <div className={rootClassName}>
      <h4>{header}</h4>
    </div>
  );
};

export default Header;
