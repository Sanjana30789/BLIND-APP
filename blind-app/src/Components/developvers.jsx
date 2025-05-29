import React from 'react';
import '../styles/Developers.css';

const Developers = () => (
    <div className="developers-container">
    <h1 className="developers-title">Meet the Developers</h1>

    <div className="developer-cards">
      {/* Developer 1 */}
      <div className="developer-card">
        <img
          src="/images/sanika.jpg"
          alt="Sanika jadhav"
          className="developer-img"
        />
        <h2>Sanika Jadhav</h2>
        <p className="role">Frontend Developer</p>
        <p className="description">
          Passionate about building clean, accessible user interfaces using React, JavaScript, and CSS. Focused on delivering impactful solutions for assistive technologies.
        </p>
      </div>

      {/* Developer 2 */}
      <div className="developer-card">
        <img
          src="/images/sanjana.jpg"
          alt="Sanjana Choubey"
          className="developer-img"
        />
        <h2>Sanjana Choubey</h2>
        <p className="role">Backend Developer</p>
        <p className="description">
          Experienced in Node.js and database design. Dedicated to building secure and scalable backend services that power inclusive digital experiences.
        </p>
      </div>
    </div>
  </div>
);

export default Developers;
