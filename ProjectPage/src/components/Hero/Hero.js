import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Duta
      </SectionTitle>
      <SectionText>
        What's our website (in one line)
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Sign In</Button>
    </LeftSection>
  </Section>
);

export default Hero;