import { motion } from 'framer-motion';
import { FaEye, FaDownload } from 'react-icons/fa';
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
                            className="about-image avatar-circle"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img src="/balaPic.jpg" alt="Balachandar Profile" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 20%', borderRadius: '50%' }} />
                        </motion.div>
                        <div className="about-image-decoration"></div>
                    </div>

                    <div className="about-text">
                        <p className="section-title" style={{ textAlign: 'left' }}>About Me</p>
                        <h3>Passionate Developer Based in Madurai, India</h3>
                        <p>
                            I'm Balachandar, a third-year Information Technology student at PSR Engineering College, Sivakasi, India. I have a strong interest in software development and enjoy working with Java and SQL to solve programming problems.
                        </p>
                        <p>
                            I continuously improve my coding and problem-solving skills through practice and small projects. I am currently looking for internship or entry-level opportunities where I can gain real-world experience and grow as a software developer.
                        </p>

                        <div className="about-resume-actions">
                            <motion.a
                                href="/Bala_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="resume-btn resume-btn--view"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEye size={16} />
                                <span>View Resume</span>
                            </motion.a>
                            <motion.a
                                href="/Bala_Resume.pdf"
                                download="Bala_Resume.pdf"
                                className="resume-btn resume-btn--download"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaDownload size={14} />
                                <span>Download Resume</span>
                            </motion.a>
                        </div>

                        <div className="about-highlights">
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">2</div>
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
