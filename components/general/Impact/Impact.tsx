import { Container } from "@components/ui";
import React from "react";
import Button from "../../ui/Button/Button";
import s from "./Impact.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
}

const Impact: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container layout="A" bgColor="primary">
      <div className={s.container}>
        <div>
          <h3>Find your personal preferrence!</h3>
          <Button buttonStyle="B" color="outline" className={s.button}>
            DIVE HERE
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Impact;
