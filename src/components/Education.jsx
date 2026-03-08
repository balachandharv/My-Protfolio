import { motion } from 'framer-motion';
import './Education.css';

const education = [
    {
        year: '2022 – 2026',
        degree: 'B.Tech in Information Technology',
        school: 'University College of Engineering, Madurai',
        details: 'Focused on software development, web technologies, and data structures.',
    },
    {
        year: '2020 – 2022',
        degree: 'Higher Secondary Education (HSC)',
        school: 'Madurai, Tamil Nadu',
        details: 'Completed with a focus on Computer Science and Mathematics.',
    },
    {
        year: '2019 – 2020',
        degree: 'Secondary Education (SSLC)',
        school: 'Madurai, Tamil Nadu',
        details: 'Completed with distinction.',
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
    hidden: { opacity: 0, x: -30 },
    visible: {
        opacity: 1, x: 0,
        transition: { type: "spring", stiffness: 80 }
    }
};

export default function Education() {
    return (
        <section className="section" id="education">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title">Education</p>
                    <p className="section-subtitle">My academic journey</p>
                </motion.div>

                <motion.div
                    className="education-timeline"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {education.map((item) => (
                        <motion.div
                            key={item.degree}
                            className="timeline-item"
                            variants={itemVariants}
                        >
                            <div className="timeline-dot"></div>
                            <div className="glass-card timeline-card">
                                <span className="timeline-year">{item.year}</span>
                                <h3 className="timeline-degree">{item.degree}</h3>
                                <p className="timeline-school">{item.school}</p>
                                <p className="timeline-details">{item.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
