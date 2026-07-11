import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 8px;
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  max-width: 600px;
  margin: 0 auto 2rem;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 0.75rem 2rem;
  background: white;
  color: #764ba2;
  border-radius: 50px;
  font-weight: 600;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    color: #2d3748;
    margin-bottom: 0.75rem;
  }
  
  p {
    color: #718096;
  }
`;

function Home() {
  return (
    <div className="container">
      <Hero>
        <HeroTitle>Welcome to MySite</HeroTitle>
        <HeroSubtitle>
          Professional services delivered with excellence and care.
          Let's build something amazing together.
        </HeroSubtitle>
        <CTAButton to="/contact">Get Started</CTAButton>
      </Hero>

      <FeaturesGrid>
        <FeatureCard>
          <h3>🚀 Fast & Reliable</h3>
          <p>Lightning-fast performance with reliable service you can count on.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>💡 Innovative Solutions</h3>
          <p>Creative approaches to solve complex problems effectively.</p>
        </FeatureCard>
        <FeatureCard>
          <h3>🤝 Client Focused</h3>
          <p>Your success is our priority. We're with you every step of the way.</p>
        </FeatureCard>
      </FeaturesGrid>
    </div>
  );
}

export default Home;