import React from 'react';

import { Section, SectionDivider, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 20, text: 'Learning required technologies'},
  { number: 1000, text: 'Building APIs', },
  { number: 1900, text: 'Creating Front-End and Back-End', },
  { number: 5000, text: 'Debugging & Final presentation', }
];

// Renamed as Workflow
const Acomplishments = () => (
  <Section id ="about">
    <SectionDivider />
    <br />
    <SectionTitle>Workflow</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          {/* <BoxNum>{card.number}+</BoxNum> */}
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
    <br />
    <SectionTitle>About Us</SectionTitle>
    <SectionText>
      A team of 3 who selected this project and did nothing in the given 3 months, 
      completed somehow in 2 days just before semester end exams.
    </SectionText>
  </Section>
);

export default Acomplishments;
