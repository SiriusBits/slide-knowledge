import React from 'react';
import { Heading, Slide, Text, Image } from 'spectacle';

const images = {
  titleimage: require('../assets/febe-title.jpeg'),
};

class TheDate {
  RightNow() {
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return today.toLocaleDateString('en-US', options);
  }
}

export default (
  <Slide transition={['zoom', 'slide']} bgColor="primary" bgDarken={0.4} bgImage={images.titleimage}>
    <Heading size={1} fit caps lineHeight={1} textColor="#46F346">
      Front End is the New Back End
    </Heading>
    <Text margin="10px 100px 0 100px" textColor="tertiary" textSize="3rem" bold>
      Modern Web Development Trends, Techniques, and Tooling
    </Text>
    <Text margin="10px 0 0" textColor="tertiary" textSize="2rem">
      Ben Bykowski <small>- @Sirius_B</small> &nbsp; &nbsp; &nbsp; {TheDate.RightNow}
      June 2nd, 2018
    </Text>
    <Text margin="10px 0 0" textColor="#6fc04a" textSize="3rem">
      Hyland Software - Westlake, Ohio
    </Text>
    <Text margin="50px 0 0" textColor="tertiary" textSize="2rem" />
  </Slide>
);
