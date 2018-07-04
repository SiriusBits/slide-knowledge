import './normalize.css';
import './index.css';
import print from 'spectacle/lib/themes/default/print';
import screen from './screen';

/**
 * Create the theme.
 */
const createTheme = (name, custom) => ({
  screen: screen(name, custom),
  print: print(),
});

export default createTheme;
