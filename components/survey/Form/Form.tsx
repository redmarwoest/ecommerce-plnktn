import { FC, useEffect, useRef } from "react";
import s from "./Form.module.scss";
import { Button, Container } from "@components/ui";
import React from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Question from "../Question/Question";
import Image from "next/image";
import Link from "next/link";
import ProgressBar from "../ProgressBar/ProgressBar";
import Result from "../Result/Result";
import { motion } from "framer-motion";
import { variantsTwo } from "../../animation/animation";
import { questionArray } from "../Questions";
import { results } from "../Results";
import ReactPlayer from "react-player";

const Form: FC = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  useEffect(() => {
    if (ref.current) {
      disableBodyScroll(ref.current);
    } else {
      enableBodyScroll(ref.current);
    }
    return () => {
      clearAllBodyScrollLocks();
    };
  });
  const [percentRange, setProgress] = React.useState(0);
  const [page, setPages] = React.useState(0);
  const [formData, setFormData] = React.useState({
    topHealthGoal: "",
    rateSleep: "",
    dietSelection: "",
  });

  // formData[Object.keys(formData)[page]];

  const displayResult = () => {
    if (formData.topHealthGoal === "Immunity") {
      return (
        <Result
          products={results.resultOne.products}
          articles={results.resultOne.articles}
        ></Result>
      );
    }
  };

  const questionDisplay = () => {
    if (page === 1) {
      return (
        <Question
          title={questionArray.questionOne.title}
          // subtitle={questionArray.questionOne.subtitle}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionOne.questions}
        ></Question>
      );
    } else if (page === 2) {
      return (
        <Question
          title={questionArray.questionTwo.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionTwo.questions}
        ></Question>
      );
    } else if (page === 3) {
      return (
        <Question
          title={questionArray.questionThree.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionThree.questions}
        ></Question>
      );
    } else if (page === 4) {
      return (
        <Question
          title={questionArray.questionFour.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionFour.questions}
        ></Question>
      );
    } else if (page === 5) {
      return (
        <Question
          title={questionArray.questionFive.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionFive.questions}
        ></Question>
      );
    } else if (page === 6) {
      return (
        <Question
          title={questionArray.questionSix.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionSix.questions}
        ></Question>
      );
    } else if (page === 7) {
      return (
        <Question
          title={questionArray.questionSeven.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionSeven.questions}
        ></Question>
      );
    } else if (page === 8) {
      return (
        <Question
          title={questionArray.questionEight.title}
          formData={formData}
          setFormData={setFormData}
          items={questionArray.questionTwo.questions}
        ></Question>
      );
    } else {
      return;
    }
  };
  return (
    <motion.div className={s.root} ref={ref}>
      <ProgressBar percentRange={percentRange} />
      <Link href={"/"} className={s.backButtonLink}>
        <Image
          className={s.backButton}
          src={"/arrow-back.svg"}
          alt={""}
          width={30}
          height={30}
        ></Image>
      </Link>
      <Container layout="A" bgColor={"primary"}>
        <Container layout="D" bgColor="secondary">
          <div className={s.videoContainer}>
            <ReactPlayer
              className={s.reactPlayer}
              objectFit="fill"
              width="100%"
              height="100%"
              url="/Untitled.mp4"
            />
          </div>
        </Container>

        <Container layout="B" bgColor="primary">
          {page === 0 ? (
            <motion.div
              className={s.startScreen}
              variants={container}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <motion.div variants={item}>
                <Image
                  src="/survey-big.svg"
                  alt={""}
                  width={72}
                  height={72}
                ></Image>
              </motion.div>
              <div>
                <motion.h2 variants={item}>Find your personal fit!</motion.h2>
                <motion.p variants={item}>
                  Lorum ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum
                  ipsum toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum
                  toras mi pisum Lorum ipsum toras mi pisum Lorum ipsum toras mi
                  pisum Lorum ipsum t
                </motion.p>
              </div>
              <motion.div variants={item}>
                <Button
                  color="dark-green"
                  buttonStyle="B"
                  onClick={() => {
                    setPages((currPage) => currPage + 1);
                  }}
                >
                  START
                </Button>
              </motion.div>
            </motion.div>
          ) : page === 9 ? (
            <motion.div>{displayResult()}</motion.div>
          ) : (
            <div className={s.questionContainer}>
              <p>
                Question <strong>0{page}/08</strong>
              </p>
              <motion.div
                key={page}
                variants={variantsTwo}
                animate={"show"}
                initial="hide"
              >
                {questionDisplay()}
              </motion.div>
              <div className={s.buttons}>
                <Button
                  color="grey"
                  disabled={page == 0}
                  onClick={() => {
                    setPages((currPage) => currPage - 1);
                    setProgress(percentRange > 0 ? percentRange - 12.5 : 0);
                  }}
                >
                  Back
                </Button>
                <Button
                  color="dark-green"
                  buttonStyle="C"
                  style={}
                  onClick={() => {
                    setPages((currPage) => currPage + 1);
                    setProgress(percentRange < 100 ? percentRange + 12.5 : 100);
                  }}
                >
                  {page === 8 ? "Submit" : "Next"}
                </Button>
              </div>
            </div>
          )}
        </Container>
      </Container>
    </motion.div>
  );
};

export default Form;

const container = {
  show: {
    transition: {
      staggerChildren: 0.2,
      type: "spring",
      stiffness: 100,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      ease: "easeInOut",
      duration: 0.6,
    },
  },
};
