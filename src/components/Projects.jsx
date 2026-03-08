import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Lost and Found Application',
        description:
            'A full-stack web application designed to help users report and find lost items easily. Built with a React frontend, styling in CSS, and a Java backend.',
        tech: ['React', 'Java', 'CSS3'],
        emoji: '🔍',
        github: 'https://github.com/balachandharv/Lost-And-Found-Final',
        live: 'https://github.com/balachandharv/Lost-And-Found-Final',
    },
    {
        title: 'Team Web Project',
        description:
            'A collaborative full-stack application developed as a team. Showcases teamwork, version control via GitHub, and integrating a Java backend with a modern frontend.',
        tech: ['React', 'Java', 'CSS3'],
        emoji: '👥',
        github: 'https://github.com/balachandharv/Teamproject',
        live: 'https://github.com/balachandharv/Teamproject',
    }
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
                            <div className="project-image">
                                <span className="project-emoji">{project.emoji}</span>
                                <div className="project-overlay">
                                    <div className="project-links">
                                        <a
                                            href={project.live}
                                            className="btn-primary project-btn pulse-glow"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaExternalLinkAlt size={14} /> View Project
                                        </a>
                                        <a
                                            href={project.github}
                                            className="btn-secondary project-btn"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <FaGithub size={14} /> GitHub
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
