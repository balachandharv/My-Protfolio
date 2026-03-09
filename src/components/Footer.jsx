import { FaHeart } from 'react-icons/fa';
import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <a href="#hero" className="footer-logo">
                    <img src="/WhatsApp_Image_2026-03-08_at_1.28.50_PM-removebg-preview.png" alt="Bala Logo" />
                </a>
                <div className="footer-text" style={{ textAlign: "center" }}>
                    <p>Made with <FaHeart size={14} color="#e74c3c" style={{ verticalAlign: 'middle', margin: '0 4px' }} /> by Bala</p>
                    <p style={{ marginTop: "4px" }}>Year: 2026</p>
                </div>
                <div className="footer-links">
                    <a href="#hero">Home</a>
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </div>
        </footer>
    );
}
