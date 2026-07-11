import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

function About() {
  return (
    <div className="container">
      <AboutContainer>
        <Title>About Us</Title>
        <Content>
          <p>
            Welcome to MySite, where we're passionate about delivering exceptional 
            service and innovative solutions. Our journey began with a simple idea: 
            to make quality services accessible to everyone.
          </p>
          <p>
            With years of experience in the industry, our team brings together 
            expertise, creativity, and dedication to every project we undertake. 
            We believe in building lasting relationships with our clients through 
            trust, transparency, and outstanding results.
          </p>
          <p>
            Our mission is to empower businesses and individuals with the tools 
            and support they need to succeed in today's fast-paced digital world. 
            Whether you're just starting out or looking to scale, we're here to 
            help you achieve your goals.
          </p>
        </Content>
      </AboutContainer>
    </div>
  );
}

export default About;