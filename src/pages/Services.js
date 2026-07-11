import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  max-width: 900px;
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

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }
  
  h2 {
    color: #2d3748;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #718096;
    line-height: 1.6;
  }
`;

function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.'
    },
    {
      title: 'Digital Strategy',
      description: 'Comprehensive digital strategies to help you reach your target audience and achieve your business objectives.'
    },
    {
      title: 'Consulting',
      description: 'Expert guidance and support to help you navigate complex technical and business challenges.'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your digital assets running smoothly and securely.'
    }
  ];

  return (
    <div className="container">
      <ServicesContainer>
        <Title>Our Services</Title>
        <ServiceGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </ServicesContainer>
    </div>
  );
}

export default Services;