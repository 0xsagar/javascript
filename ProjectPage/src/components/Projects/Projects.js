import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

// const projectsDemo = [{
//         title: 'Project 1',
//         description: 'two lines about it.'
//       },{
//         title: 'Project 2',
//         description: 'two lines about it.'
//       },{
//         title: 'Project 3',
//         description: 'two lines about it.'
//       },{
//         title: 'project 4',
//         description: 'two lines about it.'
//       }];

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Features</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, source, visit}) => (
        <BlogCard key = {id}>
          <Img src = {image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          
          {/* For tags in projects (which stack is used)  */}
          {/* <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
              <Tag key = {i}>{tag} </Tag>
              ))}
            </TagList>
          </div> */}
          {/* For making buttons to open code and source */}
          {/* <UtilityList>
            <ExternalLinks href = {visit}>Code</ExternalLinks>
            <ExternalLinks href = {source}>Source</ExternalLinks>
          </UtilityList> */}
        </BlogCard>  
      ))}
    </GridContainer>
  </Section>
);

export default Projects;