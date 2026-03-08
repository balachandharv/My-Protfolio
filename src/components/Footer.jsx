import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-inner">
                <span className="footer-logo">&lt;Bala /&gt;</span>
                <p className="footer-text">
                    Designed by Bala
                </p>
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
