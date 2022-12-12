'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <div className="gradient-02 z-0" />
        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
        >
            <TypingText title="| About CodeXam" textStyles="text-center" />
        </motion.div>
        <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
        >
            <span className="font-extrabold text-white">CodeXam</span> is a learning platform that helps individuals learn about coding and programming.{' '}
            <span className="font-extrabold text-white">
          The platform offers a range of courses and tutorials, allowing users to build their skills and knowledge in a
        </span>{' '}
            variety of programming languages.{' '}
            <span className="font-extrabold text-white">Whether</span> you're a beginner or an experienced programmer, Codexam has something to offer.{' '}
            <span className="font-extrabold text-white">explore</span> the world
            of the CodeXam by scrolling down
        </motion.p>
        About section
  </section>
);

export default About;
