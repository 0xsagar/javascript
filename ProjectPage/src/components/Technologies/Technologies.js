import React from 'react';
import { DiAtom, DiBootstrap, DiCss3, DiFirebase, DiHtml5, DiJavascript, DiJavascript1, DiMongodb, DiNodejs, DiNodejsSmall, DiReact, DiRedis, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      Some theory about the technologies used in this project
    </SectionText>
    <List>
      <ListItem>
        <DiReact size = "4rem" />
        <ListTitle>React</ListTitle>
      </ListItem>
      <ListItem>
        <DiNodejsSmall size = "4rem" />
        <ListTitle>Express</ListTitle>
      </ListItem>
      <ListItem>
        <DiNodejs size = "4rem" />
        <ListTitle>Node</ListTitle>
      </ListItem>
      <ListItem>
        <DiHtml5 size = "4rem" />
        <ListTitle>HTML</ListTitle>
      </ListItem>
      <ListItem>
        <DiCss3 size = "4rem" />
        <ListTitle>CSS</ListTitle>
      </ListItem>
      <ListItem>
        <DiJavascript1 size = "4rem" />
        <ListTitle>Javascript</ListTitle>
      </ListItem>
      <ListItem>
        <DiAtom size = "4rem" />
        <ListTitle>Redux</ListTitle>
      </ListItem>
      <ListItem>
        <DiMongodb size = "4rem" />
        <ListTitle>Mongodb</ListTitle>
      </ListItem>
      <ListItem>
        <DiBootstrap size = "4rem" />
        <ListTitle>Bootstrap</ListTitle>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
