import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../Wrapper';
import { images } from '../../constants';
import './Header.scss';
// import Resume from '../../assets/Resume.pdf'

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text">Hello, I am</p>
            <h1 className="head-text">Priyanshu</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">MERN developer</p>
          {/* <p className="p-text"></p> */}
        </div>

        <a
          href="https://drive.google.com/file/d/1Vlb8oohrNEDrbQFqblzkTUq2Xm3jhVaJ/view"
          className="btn"
          target="_blank"
        >
          <div className="tag-cmp app__flex">
            <b className="p-text"> Resume</b>
          </div>
        </a>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <img src={images.profile} alt="profile_bg" />

      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.javascript, images.react, images.node].map((circle, index) => (
        <div className="circle-cmp app__flex" key={index}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');