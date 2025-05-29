import React from 'react';
import '../styles/footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} Assistive Companion. All rights reserved.</p>
  </footer>
);

export default Footer;
