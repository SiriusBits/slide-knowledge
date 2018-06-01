import React from 'react';
import { Slide, Text, List, ListItem, Image, Appear, Layout, Fill, Markdown } from 'spectacle';

const images = {
  caniuse: require('../assets/caniuse-grid.png'),
};
export default (
  <Slide transition={['zoom', 'slide', 'spin']} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Text margin="10px 0 0 0" textColor="yellow" textSize="5em">
      CSS Grid Support
    </Text>
    <Layout>
      <Fill>
        <Image width="100%" margin="20px auto 0 auto" src={images.caniuse} />
      </Fill>
    </Layout>
  </Slide>
);
