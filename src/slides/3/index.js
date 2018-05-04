import React from 'react';
import { Heading, Slide, Text, Image, Layout, Fit, Fill, Appear, Markdown } from 'spectacle';

const images = {
  dialup: require('../assets/dialup2.gif'),
  netscape: require('../assets/netscape.gif'),
  cavepic: require('../assets/comp-cave-art.jpeg'),
};

// UK
/* const pinStyleUK = {
  height: '1.5em',
  position: 'absolute',
  left: '390px',
  top: '165px',
}; */

export default (
  <Slide
    transition={['zoom', 'slide']}
    bgDarken={0.4}
    bgRepeat="repeat"
    bgSize="auto"
    bgImage={images.cavepic}
    bgColor="primary"
    textColor="tertiary"
  >
    <Heading size={2} margin="-50px 0 0 0" textColor="secondary" caps>
      Tribal Life on the Primitive Web
    </Heading>
    <Layout>
      <Fill>
        <Text textAlign="left" margin="20px 0 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>
            Backend developers wrote code that accessed/processed data and used a framework to serve resultant `HTML`
            and static assets (images, `JavaScript`, `CSS` etc.).
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image width="70%" src={images.dialup} margin="20px auto 40px auto" />
      </Fill>
    </Layout>
    <Layout>
      <Fill>
        <Text textAlign="left" margin="0 20px 0 0" textColor="tertiary" size={3} bold>
          <Markdown>
            Business logic, security and authentication, data management, `API` development, was all largely handled on
            the server by backend code.
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image height="50%" margin="40px auto 0 auto" src={images.netscape} />
      </Fill>
    </Layout>
  </Slide>
);
