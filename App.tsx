import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/styles/theme';
import {TopTrumpCard} from '@src/components/organisms/TopTrumpCard';
import MainScreen from '@src/screens/MainScreen';

const App = () => (
  <ThemeProvider theme={theme}>
    <MainScreen />
  </ThemeProvider>
);
export default App;
