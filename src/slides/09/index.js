import React from 'react';
import { Appear, Fill, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/robot-construction-workers.jpg'),
  pretendingvanillajs: require('../assets/pretending-vanilla-js.jpg'),
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
        <Text textAlign="left" margin="20px 0 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>
            Then `ES6/2015` arrived. `JavaScript` joined `CSS` and `HTML` with a regular cadence of incremental, steady
            updates. `TypeScript` and `ES6+Babel` made it possible for developers to take advantages of these
            improvements without delay.
          </Markdown>
        </Text>
        <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>
            Authoring tools arose such as `Atom`, `VS Code`, and `SublimeText` and their package ecosystem for extending
            the platform to make writing `HTML/CSS/JS` better and easier.
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image width="65%" margin="20px auto 0 auto" src={images.pretendingvanillajs} />
      </Fill>
    </Layout>
  </Slide>
);
