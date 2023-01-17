import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div>
      <motion.section
        variants={staggerChildren}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`bg-footer paddings ${css.wrapper}`}
      >
        <motion.div
          variants={footerVariants}
          className={`innerWidth yPaddings flexCenter ${css.container}`}
        >
          <div className={css.left}>
            <span className="primaryText">
              Let's make something <br />
              amazing together.
            </span>
            <span className="primaryText">
              Start by <a href="mailto:zainkeepscode@gmail.com">saying hi</a>
            </span>
          </div>

          <div className={css.right}>
            <div className={css.info}>
              <span className="secondaryText">Information</span>
              <p>145 New York, FL 5467, USA</p>
            </div>
            <ul className={css.menu}>
              <li>Services</li>
              <li>Works</li>
              <li>Notes</li>
              <li>Experience</li>
            </ul>
          </div>
        </motion.div>
      </motion.section>
      <footer id="aboutUs" className={css.footer}>
        Developed by{" "}
        <a
          href="https://leatech.vn/"
          style={{ color: "#2374E1" }}
          target="_blank"
        >
          Leatech
        </a>
      </footer>
    </div>
  );
};

export default Footer;
