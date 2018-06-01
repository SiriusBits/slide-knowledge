import React from 'react';
import { Slide, Text, List, ListItem, Image, Appear, Layout, Fill, Markdown } from 'spectacle';

const images = {
  cmb: require('../assets/chipmunk-burn.gif'),
};
export default (
  <Slide transition={['zoom', 'slide', 'spin']} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Text margin="50px 0 0 0" textColor="yellow" textSize="5em">
      Live Coding
    </Text>
    <Layout>
      <Fill>
        <List>
          <Appear>
            <ListItem>CSS Grid Demo</ListItem>
          </Appear>
          <Appear>
            <ListItem>React + Yarn/NPM</ListItem>
          </Appear>
          <Appear>
            <ListItem>HyperApp + ParcelJS vs Webpack</ListItem>
          </Appear>
        </List>
      </Fill>
      <Fill>
        <Image width="80%" margin="20px auto 0 auto" src={images.cmb} />
      </Fill>
    </Layout>
  </Slide>
);
