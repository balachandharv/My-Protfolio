import { useState, useEffect } from 'react';
import './ScrollNav.css';

const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
];

export default function ScrollNav() {
    const [activeSection, setActiveSection] = useState('hero');
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show dots only after scrolling past hero initial viewport
            setVisible(window.scrollY > 200);

            // Determine which section is currently in view
            let current = 'hero';
            for (const section of sections) {
                const el = document.getElementById(section.id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    // Section is in view if its top is within upper half of viewport
                    if (rect.top <= window.innerHeight * 0.45) {
                        current = section.id;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Call once on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`scroll-nav ${visible ? 'scroll-nav--visible' : ''}`} aria-label="Section navigation">
            <div className="scroll-nav__track">
                {sections.map((section, index) => (
                    <button
                        key={section.id}
                        className={`scroll-nav__dot ${activeSection === section.id ? 'scroll-nav__dot--active' : ''}`}
                        onClick={() => handleClick(section.id)}
                        aria-label={`Go to ${section.label}`}
                        style={{ animationDelay: `${index * 0.06}s` }}
                    >
                        <span className="scroll-nav__dot-inner" />
                        <span className="scroll-nav__label">{section.label}</span>
                    </button>
                ))}
            </div>
        </nav>
    );
}
