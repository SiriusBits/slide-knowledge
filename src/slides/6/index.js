import React from 'react';
import { Appear, Fill, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/geek-chapel.jpg'),
  ffchrome: require('../assets/ff-v-chrome.jpg'),
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
          <Markdown>
            `Firefox` continued to push web standards and `Chrome` joined the party, pushing `Internet Explorer` out of
            the picture.
          </Markdown>
        </Text>
        <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
          Built on a rolling six-week release cycle, these kept pace with spec maintainers.
        </Text>
        <Text textAlign="left" margin="0 20px 0 0" textColor="tertiary" size={3} bold>
          Browser manufacturers added devtools, plugins, and extensions to extend our ability to inspect, debug, and
          test front end code.
        </Text>
      </Fill>
      <Fill>
        <Image width="80%" margin="70px auto 0 auto" src={images.ffchrome} />
      </Fill>
    </Layout>
  </Slide>
);
