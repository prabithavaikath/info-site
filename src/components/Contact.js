import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  color: #718096;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  
  h3 {
    color: #2d3748;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #718096;
  }
`;

function Contact() {
  return (
    <div className="container">
      <ContactContainer>
        <Title>Get in Touch</Title>
        <Subtitle>
          Have a question or want to work together? Send me a message.
        </Subtitle>
        
        <ContactInfo>
          <InfoCard>
            <h3>📧 Email</h3>
            <p>info@mysite.com</p>
          </InfoCard>
          <InfoCard>
            <h3>📱 Phone</h3>
            <p>(555) 123-4567</p>
          </InfoCard>
          <InfoCard>
            <h3>📍 Location</h3>
            <p>San Francisco, CA</p>
          </InfoCard>
        </ContactInfo>

        <ContactForm />
      </ContactContainer>
    </div>
  );
}

export default Contact;