import React from 'react';
import { Appear, Fill, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/geek-chapel.jpg'),
  badjs: require('../assets/javascript-bad-parts.jpg'),
  morejquery: require('../assets/needs-more-jquery.jpg'),
};

export default (
  <Slide
    transition={['zoom', 'slide']}
    bgDarken={0.4}
    bgRepeat="repeat"
    bgSize="auto"
    bgImage={images.backround}
    bgColor="primary"
    textColor="tertiary"
    align="center flex-start"
  >
    <Heading size={2} margin="-10px 0 0 0" textColor="secondary" caps>
      Web 2.0 Rennaissance
    </Heading>
    <Layout>
      <Fill>
        <Text textAlign="left" margin="20px 0 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>Your father's `JavaScript` was limited but flexible, with plenty of *bad things*.</Markdown>
        </Text>
        <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>
            To cope, `JS` libraries arose to make it easier including `Prototype`, `jQuery`, and `MooTools`.
          </Markdown>
        </Text>
        <Text textAlign="left" margin="0 20px 0 0" textColor="tertiary" size={3} bold>
          <Markdown>
            `jQuery` became practically a standard on its own and lowered the barrier to entry for countless aspiring
            front end devs.
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image width="70%" margin="20px auto 0 auto" src={images.badjs} />
        <Image height="40%" margin="70px auto 0 auto" src={images.morejquery} />
      </Fill>
    </Layout>
  </Slide>
);
