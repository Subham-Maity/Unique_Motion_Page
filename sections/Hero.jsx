'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className={`${styles.innerWidth} mx-auto flex flex-col`}
            >
                <div className="flex justify-center items-center flex-col relative z-10">
                    <motion.h1 variants={textVariant(0.2)} className={styles.heroHeading}>
                        CodeXam
                    </motion.h1>
                    <motion.div
                        variants={textVariant(1.2)}
                        className="flex flex-row justify-center items-center"
                    >
                        <div className="mb-1">
                        <h1 className={styles.heroHeading}>Learn</h1>
                        </div><div className="mb-1">
                        <div className={styles.heroDText} />
                         </div> <div className="mb-1">
                        <h1 className={styles.heroHeading}>aily</h1>
                    </div>



                    </motion.div>
                </div>
                <div>
                    <motion.div
                        variants={slideIn('right', 'tween', 0.1, 1)}
                        className="relative w-full md:-mt-[20px] -mt-[12px]"
                    >
                        <div className="absolute w-full h-[300px] select-animate rounded-tl-[140px] z-[0] -top-[30px]" />

                        <div className="wrapper w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative">
                            <div className="wrapper__absolute--full beacon-wrapper beacon-wrapper-01">
                                <div className="beacon beacon-01"></div>
                            </div>
                            <div className="wrapper__absolute--full beacon-wrapper beacon-wrapper-02">
                                <div className="beacon beacon-02"></div>
                            </div>
                            <div className="wrapper__absolute--full beacon-wrapper beacon-wrapper-03">
                                <div className="beacon beacon-03"></div>
                            </div>

                            <div id="particles-js" className="wrapper__absolute--full"></div>

                            <div className="space-nebula__wrapper wrapper__absolute--full">
                                <div className="space-nebula space-nebula-01"></div>
                                <div className="space-nebula space-nebula-02"></div>
                                <div className="space-nebula space-nebula-03"></div>
                            </div>

                            <div className="orb__wrapper">
                                <div className="orb__mask">
                                    <div className="orb__texture"></div>

                                    <div className="orb__cloudgroup orb__cloudgroup-01">
                                        <div className="orb__clouds orb__clouds-01"></div>
                                        <div className="orb__clouds orb__clouds-02"></div>
                                    </div>
                                    <div className="orb__cloudgroup orb__cloudgroup-02">
                                        <div className="orb__clouds orb__clouds-01"></div>
                                        <div className="orb__clouds orb__clouds-02"></div>
                                    </div>
                                    <div className="orb__cloudgroup orb__cloudgroup-03">
                                        <div className="orb__clouds orb__clouds-01"></div>
                                        <div className="orb__clouds orb__clouds-02"></div>
                                    </div>
                                    <div className="orb__cloudgroup orb__cloudgroup-04">
                                        <div className="orb__clouds orb__clouds-01"></div>
                                        <div className="orb__clouds orb__clouds-02"></div>
                                    </div>

                                    <div className="orb__shading"></div>
                                    <div className="orb__lighting"></div>
                                </div>
                            </div>

                            <div className="wrapper__absolute--full landscape-clouds__wrapper">
                                <div className="landscape-clouds landscape-clouds-01"></div>
                                <div className="landscape-clouds landscape-clouds-02"></div>
                            </div>

                            <div className="landscape">
                                <div className="landscape__bg landscape__bg--03"></div>
                                <div className="landscape__bg landscape__bg--02"></div>
                                <div className="landscape__bg landscape__bg--01"></div>
                            </div>
                        </div>





                    </motion.div>


                </div>


            </motion.div>
  </section>
);

export default Hero;
