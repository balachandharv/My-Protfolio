import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
    {
        title: 'Responsive Web Design',
        issuer: 'freeCodeCamp',
        date: '2025',
        icon: '🏆',
    },
    {
        title: 'JavaScript Algorithms & Data Structures',
        issuer: 'freeCodeCamp',
        date: '2025',
        icon: '📜',
    },
    {
        title: 'React Basics',
        issuer: 'Meta (Coursera)',
        date: '2025',
        icon: '⚛️',
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
        opacity: 1, scale: 1, y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function Certifications() {
    return (
        <section
            className="section"
            id="certifications"
            style={{ background: 'var(--bg-secondary)' }}
        >
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title">Certifications</p>
                    <p className="section-subtitle">
                        Professional certifications and achievements
                    </p>
                </motion.div>

                <motion.div
                    className="certifications-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {certifications.map((cert) => (
                        <motion.div
                            key={cert.title}
                            className="glass-card cert-card"
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                        >
                            <div className="cert-icon">{cert.icon}</div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
