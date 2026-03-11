import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaJava, FaMobileAlt, FaBrain, FaGraduationCap } from 'react-icons/fa';
import './Certifications.css';

const certifications = [
    {
        title: 'Machine learning in python intern',
        issuer: 'Phoenix Soft Tech, Madurai',
        date: 'Internship',
        icon: <FaBrain size={28} color="#8b5cf6" />,
        image: '/ML Certificate.jpeg',
    },
    {
        title: 'Java Developer Intern',
        issuer: 'Web Walk Infosys, Madurai',
        date: 'Internship',
        icon: <FaJava size={28} color="#ED8B00" />,
        image: '/java intern Certificate.jpeg',
    },
    {
        title: 'Mobile App Developer Intern',
        issuer: 'NBAYS IT Solutions, Madurai',
        date: 'Internship',
        icon: <FaMobileAlt size={28} color="#10b981" />,
        image: '/MAD Certificate.jpeg',
    },
    {
        title: 'Big Data Computing',
        issuer: 'NPTEL',
        date: 'Passed',
        icon: <FaGraduationCap size={28} color="#1a73e8" />,
        image: '/Big data certificate.jpeg',
    },
    {
        title: 'Introduction to IoT',
        issuer: 'NPTEL',
        date: 'Passed',
        icon: <FaGraduationCap size={28} color="#1a73e8" />,
        image: '/Iot Certificate.png',
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
    const [selectedCert, setSelectedCert] = useState(null);

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
                    <p className="section-title">Certifications & Internships</p>
                    <p className="section-subtitle">
                        My professional certifications and early work experiences
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
                            className={`glass-card cert-card ${cert.image ? 'clickable' : ''}`}
                            variants={itemVariants}
                            whileHover={{ y: -5, scale: 1.05 }}
                            onClick={() => cert.image && setSelectedCert(cert)}
                        >
                            <div className="cert-icon">{cert.icon}</div>
                            <h3 className="cert-title">{cert.title}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <p className="cert-date">{cert.date}</p>
                            {cert.image && (
                                <button className="view-btn">View Certificate</button>
                            )}
                        </motion.div>
                    ))}
                </motion.div>

                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            className="cert-modal-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                        >
                            <motion.div
                                className="cert-modal-content"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
                                    &times;
                                </button>
                                <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
