import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = () => setMenuOpen(false);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
        >
            <div className="navbar-inner">
                <a href="#hero" className="navbar-logo">&lt;Bala /&gt;</a>

                <button
                    className={`navbar-toggle ${menuOpen ? 'active' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <div className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navLinks.map((link, index) => (
                        <motion.a
                            key={link.href}
                            href={link.href}
                            onClick={handleLinkClick}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * index + 0.3 }}
                            whileHover={{ scale: 1.1, color: "var(--accent-cyan)" }}
                        >
                            {link.label}
                        </motion.a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}
