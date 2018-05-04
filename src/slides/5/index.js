import React from 'react';
import { Appear, Fill, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/geek-chapel.jpg'),
  oprah: require('../assets/opera-webkit.jpg'),
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
          Front end development grew in earnest, and there was some awkwardness at first.
        </Text>
        <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
          Slowly but surely, a series of important events and trends transpired while tooling improved and commmunities
          arose.
        </Text>
        <Text textAlign="left" margin="0 20px 0 0" textColor="tertiary" size={3} bold>
          <Markdown>
            The web narrowly avoided the tyrannical rule of `XHTML 2.0`, which was deposed in favor of `HTML5`.
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image height="80%" margin="40px auto 0 auto" src={images.oprah} />
      </Fill>
    </Layout>
  </Slide>
);
