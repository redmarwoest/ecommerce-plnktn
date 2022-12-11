import {
  ButtonHTMLAttributes,
  ComponentType,
  FC,
  HTMLAttributes,
  ReactNode,
} from "react";
import s from "./Button.module.scss";
import cn from "classnames";
import Image from "next/image";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
  isIconLeftBig?: boolean;
  isIconLeft?: boolean;
  isIconRight?: boolean;
  Component?: string | ComponentType<HTMLAttributes<HTMLElement>>;
  href?: string;
  image?: string | StaticImport;
  alt?: string | StaticImport;
  nameIcon?: string;
  buttonStyle?: "A" | "B" | "C" | "D" | "E";
  color?:
    | "light-green"
    | "dark-green"
    | "light-blue"
    | "dark-blue"
    | "grey"
    | "outline";
}

const Button: FC<Props> = ({
  children,
  className,
  isIconLeft,
  isIconLeftBig,
  isIconRight,
  nameIcon,
  buttonStyle,
  color,
  Component = "button",
  image,
  alt,
  ...rest
}) => {
  const rootClassName = cn(s.root, {
    [s.layoutA]: buttonStyle === "A",
    [s.layoutB]: buttonStyle === "B",
    [s.layoutC]: buttonStyle === "C",
    [s.layoutD]: buttonStyle === "D",
    [s.layoutE]: buttonStyle === "E",
    [s.colorA]: color === "light-green",
    [s.colorB]: color === "dark-green",
    [s.colorC]: color === "light-blue",
    [s.colorD]: color === "dark-blue",
    [s.colorE]: color === "grey",
    [s.colorF]: color === "outline",
  });
  return (
    <Component className={rootClassName} type="button" {...rest}>
      {isIconLeft && <Image src={image} width={14} height={14} alt={alt} />}
      {isIconLeftBig && <Image src={image} width={20} height={20} alt={alt} />}
      {children}
      {isIconRight && <Image src={image} width={14} height={14} alt={alt} />}
    </Component>
  );
};

export default Button;
