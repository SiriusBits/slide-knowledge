import React from 'react';
import { Appear, Text, ListItem, Slide, Heading, Layout, Fill, Fit, Image, Markdown } from 'spectacle';

const images = {
  appleprim: require('../assets/early-apple-computer.jpg'),
  cavepic: require('../assets/comp-cave-art.jpeg'),
};
export default (
  <Slide transition={['zoom', 'slide']} bgColor="primary" textColor="tertiary" align="center flex-start">
    <Heading
      size={2}
      margin="-10px 0 0 0"
      bgRepeat="repeat"
      bgSize="auto"
      bgImage={images.cavepic}
      textColor="#fff"
      caps
    >
      Tribal Life on the Primitive Web
    </Heading>
    <Layout>
      <Fill>
        <Text textAlign="left" margin="20px 20px 0 0" textColor="tertiary" size={3} bold>
          Front End development was a shared responsibility, between design and backend. CSS was hand written, spec
          adoption by browser manufacturers was glacial and inconsistent.
        </Text>
        <Text textAlign="left" margin="40px 20px 0 0" textColor="tertiary" size={3} bold>
          <Markdown>
            `JavaScript` was pretty much the only browser language option outside of it's distant cousin `ActionScript`
            in `Flash`. Written in just 10 days (as `Mocha`), `JavaScript` hardly changed for more than a decade.
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image height="70%" margin="40px auto 0 auto" src={images.appleprim} />
      </Fill>
    </Layout>
  </Slide>
);
