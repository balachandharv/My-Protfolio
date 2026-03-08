import { motion } from 'framer-motion';
import './About.css';

export default function About() {
    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.div
                    className={"about-grid"}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-image-wrapper">
                        <motion.div
                            className="about-image"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src="/balaPic.jpg" alt="Balachandar" className="about-photo" />
                        </motion.div>
                        <div className="about-image-decoration"></div>
                    </div>

                    <div className="about-text">
                        <p className="section-title" style={{ textAlign: 'left' }}>About Me</p>
                        <h3>Passionate Developer Based in Madurai, India</h3>
                        <p>
                            I’m Balachandar, a third-year Information Technology student at PSR Engineering College, Sivakasi, India. I have a strong interest in software development and enjoy working with Java and SQL to solve programming problems.
                        </p>
                        <p>
                            I continuously improve my coding and problem-solving skills through practice and small projects. I am currently looking for internship or entry-level opportunities where I can gain real-world experience and grow as a software developer.
                        </p>

                        <div className="about-highlights">
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">3+</div>
                                <div className="highlight-label">Projects Completed</div>
                            </motion.div>
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">8+</div>
                                <div className="highlight-label">Technologies</div>
                            </motion.div>
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">5+</div>
                                <div className="highlight-label">Certifications</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
