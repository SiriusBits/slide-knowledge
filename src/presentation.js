// Import React
import React from 'react';

// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, ListItem, List, Quote, Slide, Text } from 'spectacle';

// Import theme
import createTheme from 'spectacle-theme-nova';

// Require CSS
require('normalize.css');

const theme = createTheme('nova');
/* {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  }, */
/* {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  } */

const slidesImports = [
  import('./slides/1'),
  import('./slides/2'),
  import('./slides/3'),
  import('./slides/4'),
  import('./slides/5'),
  import('./slides/6'),
  import('./slides/7'),
  import('./slides/8'),
  import('./slides/09'),
  import('./slides/10'),
  import('./slides/11'),
];

export default class Presentation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: Array(slidesImports.length).fill(<Slide key="loading" />),
    };
  }

  componentDidMount() {
    const importedSlides = [];
    Promise.all(slidesImports).then(slidesImportsResolved => {
      slidesImportsResolved.forEach(slide => {
        importedSlides.push(slide.default);
      });
      this.setState({ slides: importedSlides });
    });
  }

  render() {
    const { slides } = this.state;
    return (
      <Deck transition={['zoom', 'slide']} transitionDuration={500} theme={theme} contentWidth={1212}>
        {slides.map((slide, index) => React.cloneElement(slide, { key: index }))}
      </Deck>
    );
  }
}
