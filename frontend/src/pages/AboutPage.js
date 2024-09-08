// src/pages/AboutPage.js
import React, { useEffect, useState, useRef } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './AboutPage.css'; // Optional: Create a CSS file for custom styling

function AboutPage() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {

      const updatePadding = () => {
          const header = document.querySelector('.navbar');
          if (header) {
              setHeaderHeight(header.offsetHeight);
          }
      };

      updatePadding(); // initial padding
      window.addEventListener('resize', updatePadding); //update padding on resize
      return () => {
          window.removeEventListener('resize', updatePadding);
      };
  }, []);

  return (
    <div className="max-w-4xl mx-auto about-border" style={{ paddingTop: `${headerHeight * 1.5}px` }} ref={contentRef}>
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">About Us</h1>
        <p>Feedback Society</p>
        <img 
            src="https://images.adsttc.com/media/images/5de4/ed20/3312/fda8/2a00/01ae/slideshow/FEATURE_FO_DOMINO_PARK_08_THE_LAWN_BARRETT_DOHERTY.jpg?1575283990"
            className="mt-4 mb-4 w-full object-cover fit-image"
          />
        <p>
        safety and cultural improvements in our public spaces. Our mission is to provide a dynamic and inclusive forum where individuals can share their experiences, ideas, and concerns about how we navigate and enhance our communal environments. Whether it's addressing safety issues, suggesting improvements, or simply sharing personal observations, Feedback Society aims to be a space where every voice can contribute to positive change.
        <br></br>
        <br></br>
        At Feedback Society, we believe that every perspective is valuable in shaping the way we experience and interact with our surroundings. Our community is built on the principles of openness and respect, encouraging constructive dialogue that can lead to actionable insights and solutions. By providing a platform for these conversations, we hope to empower individuals to take an active role in improving the safety and culture of the public spaces we all share.
        <br></br>
        <br></br>
        We invite you to join us in this important conversation. Share your thoughts, engage with others, and be a part of a movement that seeks to make our public spaces safer, more inclusive, and more reflective of the diverse communities they serve. Together, we can create a more thoughtful and responsive society that values every voice and every idea.
        </p>
        <div className="space-x-4">
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
