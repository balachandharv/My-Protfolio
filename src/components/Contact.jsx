import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks ${formData.name}! Your message has been received.`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title">Get In Touch</p>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together!
                    </p>
                </motion.div>

                <motion.div
                    className="contact-grid"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="contact-info">
                        <h3>Let's Talk</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Feel free to reach out!
                        </p>

                        <div className="contact-details">
                            <motion.a
                                href="mailto:balachandhar021@gmail.com"
                                className="contact-item"
                                whileHover={{ x: 5 }}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <div className="contact-item-icon">
                                    <FaEnvelope size={20} />
                                </div>
                                <span>balachandhar021@gmail.com</span>
                            </motion.a>
                            <motion.div
                                className="contact-item"
                                whileHover={{ x: 5 }}
                            >
                                <div className="contact-item-icon">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <span>Madurai, Tamil Nadu, India</span>
                            </motion.div>
                        </div>

                        <div className="social-links">
                            <motion.a
                                href="https://github.com/balachandharv"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ y: -3, scale: 1.1 }}
                            >
                                <FaGithub size={24} />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/balachandhar021"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ y: -3, scale: 1.1 }}
                            >
                                <FaLinkedin size={24} />
                            </motion.a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <motion.button
                            type="submit"
                            className="form-submit"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Send Message
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
