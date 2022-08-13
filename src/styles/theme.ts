import {createTheme} from '@shopify/restyle';
import colors from './palette/colors';

const theme = createTheme({
  colors: colors,
  spacing: {},
  breakpoints: {},
  textVariants: {},
});

export type Theme = typeof theme;
export default theme;
