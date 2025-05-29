import React from 'react';
import '../styles/About.css';

const About = () => (
    <div className="about-container">
    
    <div className="about-text">
    <h2>About Our Project</h2>
      <p>
      Our project, Assistive Companion, is a smart mobility aid developed to support the blind and visually impaired in their everyday navigation and independence. Traditional white canes are useful but have limitations in terms of range and obstacle detection. This is where our solution comes in.
      </p>
      <p>
    <strong>Assistive Companion</strong> is an intelligent mobility aid developed to empower blind and visually impaired individuals in their daily navigation and independence. While traditional white canes offer basic guidance, they are limited in detecting hazards at a distance or providing real-time navigation. Our solution addresses these limitations with modern technologies.
  </p>

  <p>
    The Assistive Companion integrates real-time obstacle detection, voice feedback, and smart navigation to help users move confidently in both indoor and outdoor environments. Technologies like ultrasonic sensors, GPS, and AI voice assistants work together to offer a safer experience.
  </p>

  <h3>Key Features:</h3>
  <ul>
    <li>
      <strong>Real-time Obstacle Detection:</strong> Notifies users of nearby hazards to prevent collisions.
    </li>
    <li>
      <strong>Voice-guided Navigation:</strong> Offers spoken directions to reach a destination.
    </li>
    <li>
      <strong>Emergency Alert System:</strong> Sends live location to emergency contacts in critical situations.
    </li>
    <li>
      <strong>Wearable & Portable Design:</strong> Lightweight and easy to use on the go.
    </li>
    <li>
      <strong>Companion Mobile/Web Interface:</strong> Enables caregivers or family members to track or assist the user remotely.
    </li>
  </ul>

  <p>
    Our aim is to build an inclusive and accessible solution that enhances safety, confidence, and autonomy for the visually impaired. Assistive Companion bridges the gap between hardware and intelligent software—ultimately improving quality of life and promoting social inclusion.
  </p>
    </div>
    <div className="about-image">
      <img src="/images/blind2.png" alt="Assistive Tech" />
    </div>
  </div>
  
);

export default About;
