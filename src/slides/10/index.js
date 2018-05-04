import React from 'react';
import { Appear, Fill, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/robot-construction-workers.jpg'),
  newjsframeworksimpsons: require('../assets/new-js-framework-simpsons.jpg'),
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
      Industrial Web-olution
    </Heading>
    <Layout>
      <Fill>
        <Text textAlign="left" margin="20px 0 40px 0" textColor="tertiary" textSize="4rem" bold>
          Which brings us to today.
        </Text>
        <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>With the advent of `JS` frameworks like `Agular`, `React`, and `Vue`, coupled with the tooling and evolution of web
          standards and technology, headless, serverless, and PWAs are not just viable, they are our reality.</Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image width="80%" margin="260px auto 0 auto" src={images.newjsframeworksimpsons} />
      </Fill>
    </Layout>
  </Slide>
);
