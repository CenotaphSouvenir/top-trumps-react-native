import {StyleSheet} from 'react-native';
import {Theme} from '@src/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    row: {},
    keyColumn: {},
    valueColumn: {},
    text: {color: theme.colors.black, fontSize: 12},
  });

export default createStyles;
