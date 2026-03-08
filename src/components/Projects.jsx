import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Portfolio Website',
        description:
            'A modern, responsive portfolio website built with React featuring smooth animations, dark theme, and glassmorphism design. Showcases projects, skills, and professional experience.',
        tech: ['React', 'CSS3', 'JavaScript'],
        emoji: '🌐',
        github: 'https://github.com/balachandar',
        live: '#',
    },
    {
        title: 'E-Commerce Dashboard',
        description:
            'A comprehensive admin dashboard for an e-commerce platform with real-time analytics, product management, and order tracking functionality.',
        tech: ['React', 'Java', 'CSS3'],
        emoji: '🛒',
        github: 'https://github.com/balachandar',
        live: '#',
    },
    {
        title: 'Task Management App',
        description:
            'A full-featured task management application with drag-and-drop functionality, priority levels, due dates, and team collaboration features.',
        tech: ['JavaScript', 'HTML5', 'CSS3'],
        emoji: '✅',
        github: 'https://github.com/balachandar',
        live: '#',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1, y: 0,
        transition: { type: "spring", stiffness: 80 }
    }
};

export default function Projects() {
    return (
        <section className="section" id="projects" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title">Featured Projects</p>
                    <p className="section-subtitle">
                        A selection of projects I've worked on recently
                    </p>
                </motion.div>

                <motion.div
                    className="projects-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.title}
                            className="glass-card project-card"
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            <div className="project-image">{project.emoji}</div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub size={18} />
                                        GitHub
                                    </a>
                                    <a
                                        href={project.live}
                                        className="project-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaExternalLinkAlt size={16} />
                                        Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
