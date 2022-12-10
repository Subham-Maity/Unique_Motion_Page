'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        About section
  </section>
);

export default About;
