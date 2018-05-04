import React from 'react';
import { Appear, Fill, Text, Image, Layout, Slide, Heading, Markdown } from 'spectacle';

const images = {
  backround: require('../assets/robot-construction-workers.jpg'),
  cssninja: require('../assets/css-pun-ninja.jpg'),
  csstitanic: require('../assets/css-pun-titanic.jpg'),
  csswife: require('../assets/css-pun-wife.jpg'),
  cssyomama: require('../assets/css-pun-yomama.jpg'),
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
            `CSS` grew the spec, keeping pace with `HTML` and `CSS` pre-processors brought dev tooling to the style
            craft, vastly improving `CSS` authoring.
          </Markdown>
        </Text>
        <Text textAlign="left" margin="0 20px 40px 0" textColor="tertiary" size={3} bold>
          <Markdown>
            This in turn created a feedback loop that drove accelerated innovation with `CSS` such as variables,
            flexible layout, and grids.
          </Markdown>
        </Text>
        <Text textAlign="left" margin="0 20px 0 0" textColor="tertiary" size={3} bold>
          <Markdown>
            New options for layout including `Flexbox` and `CSS grid` were adopted by browser manufacturers faster and
            more collectively than ever before.
          </Markdown>
        </Text>
      </Fill>
      <Fill>
        <Image width="80%" margin="40px auto 0 auto" src={images.cssninja} />
        <Image width="80%" margin="20px auto 0 auto" src={images.csswife} />
      </Fill>
    </Layout>
  </Slide>
);
