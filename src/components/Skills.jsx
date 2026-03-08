import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaDatabase, FaGitAlt, FaGithub } from 'react-icons/fa';
import './Skills.css';

const skills = [
    { name: 'HTML5', level: '90%', icon: <FaHtml5 size={36} color="#E34F26" /> },
    { name: 'CSS3', level: '85%', icon: <FaCss3Alt size={36} color="#1572B6" /> },
    { name: 'React', level: '65%', icon: <FaReact size={36} color="#61DAFB" /> },
    { name: 'Java (Core)', level: '75%', icon: <FaJava size={36} color="#ED8B00" /> },
    { name: 'Python', level: '60%', icon: <FaPython size={36} color="#3776AB" /> },
    { name: 'SQL', level: '70%', icon: <FaDatabase size={36} color="#336791" /> },
    { name: 'Git', level: '85%', icon: <FaGitAlt size={36} color="#F05032" /> },
    { name: 'GitHub', level: '85%', icon: <FaGithub size={36} color="#181717" /> },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1, y: 0,
        transition: { type: "spring", stiffness: 100 }
    }
};

export default function Skills() {
    return (
        <section className="section" id="skills">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-title">Skills</p>
                    <p className="section-subtitle">
                        Technologies I work with to bring ideas to life
                    </p>
                </motion.div>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            className="glass-card skill-card"
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>

                            <div className="skill-bar-bg">
                                <motion.div
                                    className="skill-bar-fill"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: skill.level }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                                ></motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
