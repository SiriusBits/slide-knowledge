import React from 'react';
import { Appear, Heading, List, ListItem, Slide } from 'spectacle';

const images = {
  cavepic: require('../assets/comp-cave-art.jpeg'),
};

export default (
  <Slide transition={['zoom', 'slide']} bgDarken={0.4} bgImage={images.cavepic} bgColor="primary" textColor="tertiary">
    <Heading size={2} textColor="secondary" caps>
      Back End Development, a Brief History
    </Heading>
    <List>
      <Appear>
        <ListItem>Java, C#, VB, PHP, Ruby</ListItem>
      </Appear>
      <Appear>
        <ListItem>SQL, PostgreSQL, MySQL</ListItem>
      </Appear>
      <Appear>
        <ListItem>Spring/Struts, ASP.NET, Laravel, Rails</ListItem>
      </Appear>
    </List>
  </Slide>
);
