import { FC } from "react";
import Button from "../../ui/Button/Button";
import s from "./Footer.module.scss";
import { motion } from "framer-motion";
import { item, container } from "../../animation/animation";
import ConvinceMe from "@components/Icons/ConvinceMe";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className={s.root}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        variants={container}
        className={s.footerContainer}
      >
        <motion.div variants={item} className={s.footerOne}>
          <div className={s.footerOneFlex}>
            <Image
              className="rotate"
              src="/convince-me.svg"
              width={48}
              height={48}
              alt={""}
            ></Image>
            <div>
              <h5>Partner with us</h5>
              <p>
                Make bolder choices. Form stronger teams. Build better products.
              </p>
            </div>
          </div>
          <div>
            <Button buttonStyle="B" color="outline" className={s.button}>
              GET IN TOUCH
            </Button>
          </div>
        </motion.div>
        <motion.hr variants={item} />
        <motion.div variants={item} className={s.footerTwo}>
          <div className={s.footerTwoOne}>
            <div className={s.footerTwoOneOne}>
              <div>
                <p className={s.strong}>
                  <strong>PLNKTN PROMISE</strong>
                </p>
                <p>Plantaardig</p>
                <p>Duurzaam</p>
                <p>De beste kwaliteit</p>
                <p>Voor een gezonde levenstijl</p>
              </div>
              <div>
                <p className={s.strong}>
                  <strong>NAVIGATION</strong>
                </p>
                <a href="">All products</a>
                <a href="">Convince me</a>
                <a href="">Find your fit</a>
                <a href="">Find us in store</a>
                <a href="">Reviews</a>
              </div>
            </div>
            <div className={s.footerTwoOneTwo}>
              <p className={s.strong}>
                <strong>VARIETIES</strong>
              </p>
              <div>
                <Button isIconLeft image="/pure.svg" color="outline">
                  PURE
                </Button>
                <Button isIconLeft image="/appearance.svg" color="outline">
                  APPEARANCE
                </Button>
                <Button isIconLeft image="/performance.svg" color="outline">
                  PERFORMANCE
                </Button>
              </div>
            </div>
          </div>
          <hr />
          <div className={s.footerTwoTwo}>
            <p className={s.strong}>
              <strong>STAY TUNED</strong>
            </p>
            <p>
              {" "}
              Ontvang exclusieve kortingen, informatie over nieuwe blogs, tips
              over een gezonde levensstijl en meer!
            </p>
            <input type="text" placeholder="email@emailadress.com" />
            <Button isIconLeft image="/subscribe.svg" color="outline">
              SUBSCRIBE
            </Button>
          </div>
        </motion.div>
        <motion.hr variants={item} />
        <motion.div variants={item} className={s.footerThree}>
          <div>
            <Image src="/linkedin.svg" width={24} height={24} alt={""}></Image>
            <Image src="/instagram.svg" width={24} height={24} alt={""}></Image>
            <Image src="/facebook.svg" width={24} height={24} alt={""}></Image>
            <Image src="/twitter.svg" width={24} height={24} alt={""}></Image>
          </div>
          <div>
            <Image
              src="/plnktn-logo-zonder-bal-wit.svg"
              width={91.711}
              height={24.501}
              alt={""}
            ></Image>
            <p>
              2022 plnktn, part of Capgemini Invent | Privacy Policy | Terms of
              Use | Cookie Policy | Cookie Settings
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
