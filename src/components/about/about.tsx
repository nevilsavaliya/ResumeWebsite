import React, { useState, useEffect } from 'react';
import './about.scss';


import nevil from '../../assets/me/webp/nevil1.webp';

const photos = [nevil];

const About: React.FC = () => {
  const [photo, setPhoto] = useState('');

  useEffect(() => {
    const randomPhoto = photos[Math.floor(Math.random() * photos.length)];
    setPhoto(randomPhoto);
  }, []);

  return (
    <div className="about-container" id="about">
      <section className="about-intro">
        <div className="about-text">
        <h2 className="about-title">About Me</h2>
          <p>
            Hello! My name is <span className="purple-text">Nevil Savaliya</span>, I'm a passionate developer with a love for coding and technology. Most recently, I am working as a <span className="purple-text">Software Developer at CSE </span>
            (Communications Security Establishment) and previously a Software Developer at Bell.
          </p>
          <p>
            I'm currently <span className="purple-text"> studying at Pes University. </span>
            in my <span className="purple-text">First year</span>.
          </p>
          <p>
            My interests change greatly depending on my environment, but at the moment, I am most interested by  
            <span className="purple-text"> AI/ML, IOT Tech, and App Development.</span>
          </p>
          <p>
            My skillset is quite wide-ranged, I don't focus all too heavy on the frameworks/languages, I like to choose
            the best tools to get the best product as fast as possible. I'm a quick learner, especially in fast-paced environments
            where I'm able to hone skills on the fly to improve and deliver on time.
          </p>
          <p>
            My love for tech goes beyond the classroom. I’m always eager to dive into the world of hackathons and tech conferences.
          </p>
          <p>
            Outside of tech, you'll typically find me playing hockey, , listening/discovering some live music.
          </p>
          <p>
            if you want to keep up to date with my work you should definitely
            connect with me over on <a href="https://www.linkedin.com/in/nevil-savaliya-4a6b2225a/" target="_blank" rel="noopener noreferrer">LinkedIn</a> and <a href="https://github.com/nevilsavaliya" target="_blank" rel="noopener noreferrer">GitHub</a>.
          </p>
        </div>
        <div className="about-photo">
          <img src={photo} alt="Nevil Savaliya" />
        </div>
      </section>

      
    </div>
  );
}

export default About;
