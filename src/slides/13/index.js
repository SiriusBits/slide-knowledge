import React from 'react';
import { Appear, List, Fill, ListItem, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/js-logos.png'),
};

export default (
  <Slide
    transition={['zoom', 'slide']}
    bgDarken={0.4}
    bgImage={images.backround}
    bgColor="primary"
    textColor="tertiary"
    align="center flex-start"
  >
    <Heading size={2} margin="-10px 0 0 0" textColor="secondary" caps>
      Shouts-Outs
    </Heading>
    <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
      <Markdown>
        Thank you to the teams behind `VS Code`, `Node.js`, `React.js` and `Yarn`, `HyperApp`, the `CSS Grid Spec`,
        `Parcel.js`.
      </Markdown>
      <Markdown>Thanks to the organizers and volunteers at *StirTrek*.</Markdown>
      <Markdown>
        Special thanks to Wes Bos, Scott Tolinski and Una Kravets for inspiration, tutorials and references. Thank you
        to my co-workers and friends for their support.
      </Markdown>
      <Markdown>
        Finally *THANK YOU* to my wife Christy and sons, Bodhi, Beckmin, and Boone for putting up with me while I worked
        on this talk.
      </Markdown>
    </Text>
    <Heading size={2} margin="-10px 0 0 0" textColor="secondary" caps>
      Resources
    </Heading>
    <Layout>
      <Fill>
        <Appear>
          <List>
            <ListItem>Wes Bos & CSSGrid.io</ListItem>
            <ListItem>Scott Tolinski & LevelUp Tuts</ListItem>
          </List>
        </Appear>
      </Fill>
      <Fill>
        <Appear>
          <List>
            <ListItem>https://hyperstart.io/</ListItem>
            <ListItem>VS Code, Prettier, NPX</ListItem>
          </List>
        </Appear>
      </Fill>
    </Layout>
  </Slide>
);
