import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaDownload } from 'react-icons/fa';
import './Hero.css';

const roles = ['Frontend Developer', 'React Enthusiast', 'UI/UX Lover', 'Problem Solver'];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && displayText === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? currentRole.substring(0, displayText.length - 1)
                        : currentRole.substring(0, displayText.length + 1)
                );
            }, isDeleting ? 40 : 80);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    return (
        <section className="hero section" id="hero">
            <div className="gradient-blob blob-1"></div>
            <div className="gradient-blob blob-2"></div>

            <motion.div
                className="container hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.p
                    className="hero-greeting"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    👋 Hello, I'm
                </motion.p>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <span className="gradient-text">Balachandar</span>
                </motion.h1>

                <motion.h2
                    className="hero-role"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                >
                    {displayText}
                    <span className="typing-cursor"></span>
                </motion.h2>

                <motion.p
                    className="hero-tagline"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    A passionate final-year IT student from Madurai, India, crafting beautiful
                    and responsive web experiences with modern technologies.
                </motion.p>

                <motion.div
                    className="hero-buttons"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                >
                    <motion.a
                        href="#projects"
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span>View Projects</span>
                        <FaArrowRight size={16} />
                    </motion.a>
                    <motion.a
                        href="#contact"
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaDownload size={16} />
                        <span>Download Resume</span>
                    </motion.a>
                </motion.div>
            </motion.div>

            <motion.div
                className="hero-scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <div className="scroll-line"></div>
                <span>Scroll</span>
            </motion.div>
        </section>
    );
}
