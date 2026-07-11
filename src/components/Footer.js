import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #2d3748;
  color: #e2e8f0;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    color: white;
    margin-bottom: 1rem;
    font-size: 1.1rem;
  }
  
  p {
    margin: 0.5rem 0;
  }
  
  a {
    color: #63b3ed;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const BottomBar = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid #4a5568;
  color: #a0aec0;
  font-size: 0.9rem;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>MySite</h3>
          <p>Your trusted partner for quality services.</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <p><a href="/about">About</a></p>
          <p><a href="/services">Services</a></p>
          <p><a href="/contact">Contact</a></p>
        </FooterSection>
        <FooterSection>
          <h3>Contact</h3>
          <p>Email: info@mysite.com</p>
          <p>Phone: (555) 123-4567</p>
        </FooterSection>
      </FooterContent>
      <BottomBar>
        © {new Date().getFullYear()} MySite. All rights reserved.
      </BottomBar>
    </FooterContainer>
  );
}

export default Footer;