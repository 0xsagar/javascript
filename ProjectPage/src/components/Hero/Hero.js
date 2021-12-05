import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br/>
        Dūta (दूत)
      </SectionTitle>
      <SectionText>
        A web-based chat application with end-to-end encryption and an instant messaging solution to enable users communicate seamlessly without compromising privacy.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>Sign In</Button>
    </LeftSection>
  </Section>
);

export default Hero;