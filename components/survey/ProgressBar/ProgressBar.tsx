import { FC } from "react";
import s from "./ProgressBar.module.scss";

interface Props {
  percentRange: any;
}

const ProgressBar: FC<Props> = ({ percentRange }) => {
  return (
    <div className={s.root}>
      <div className={s.range} style={{ width: `${percentRange}%` }} />
    </div>
  );
};

export default ProgressBar;
