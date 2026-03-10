import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import useWeb3Forms from '@web3forms/react';
import './Contact.css';

export default function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const [submitStatus, setSubmitStatus] = useState("idle");
    const [statusMessage, setStatusMessage] = useState("");
    const { submit } = useWeb3Forms({
        access_key: "1b474ff7-3718-4aad-a985-7d6f5cf2d3a9",
        settings: {
            from_name: "Portfolio Contact Form",
            subject: "New Message from Portfolio",
        },
        onSuccess: (message, data) => {
            setSubmitStatus("success");
            setStatusMessage(`Thanks ${formData.name}! Your message has been sent successfully. I'll get back to you soon.`);
            setFormData({ name: '', email: '', message: '' });

            // Hide message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        },
        onError: (message, data) => {
            setSubmitStatus("error");
            setStatusMessage(`Oops! Something went wrong: ${message}`);

            // Hide message after 5 seconds
            setTimeout(() => setSubmitStatus("idle"), 5000);
        }
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitStatus("submitting");
        submit({
            name: formData.name,
            email: formData.email,
            message: formData.message,
        });
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
                            <motion.a
                                href="https://leetcode.com/u/Balachandhar_V/"
                                className="social-link"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LeetCode"
                                whileHover={{ y: -3, scale: 1.1 }}
                            >
                                <SiLeetcode size={24} />
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
                            disabled={submitStatus === "submitting"}
                        >
                            {submitStatus === "submitting" ? "Sending..." : "Send Message"}
                        </motion.button>

                        {submitStatus === "success" && (
                            <motion.div
                                className="form-message success"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {statusMessage}
                            </motion.div>
                        )}
                        {submitStatus === "error" && (
                            <motion.div
                                className="form-message error"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                {statusMessage}
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
