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
                            <div className="about-image-placeholder">👨‍💻</div>
                        </motion.div>
                        <div className="about-image-decoration"></div>
                    </div>

                    <div className="about-text">
                        <p className="section-title" style={{ textAlign: 'left' }}>About Me</p>
                        <h3>Passionate Developer Based in Madurai, India</h3>
                        <p>
                            I'm Balachandar, a final-year Information Technology student with a deep
                            passion for frontend development. I love transforming ideas into pixel-perfect,
                            interactive web experiences using modern technologies like React, JavaScript,
                            and CSS.
                        </p>
                        <p>
                            My journey in web development started with curiosity about how websites work,
                            and it has evolved into a professional passion. I enjoy building clean,
                            responsive interfaces that provide seamless user experiences. When I'm not
                            coding, I'm exploring new frameworks and design trends to stay ahead in the
                            ever-evolving tech landscape.
                        </p>

                        <div className="about-highlights">
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">5+</div>
                                <div className="highlight-label">Projects Completed</div>
                            </motion.div>
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">7+</div>
                                <div className="highlight-label">Technologies</div>
                            </motion.div>
                            <motion.div
                                className="glass-card highlight-card"
                                whileHover={{ y: -5, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <div className="highlight-number">3+</div>
                                <div className="highlight-label">Certifications</div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
