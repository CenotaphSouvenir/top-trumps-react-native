import {StyleSheet} from 'react-native';
import {Theme} from '@src/styles/theme';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      marginHorizontal: 8,
      marginTop: 8,
      paddingHorizontal: 8,
      paddingVertical: 2,
      backgroundColor: theme.colors.grey30,
    },
    keyColumn: {flex: 2},
    valueColumn: {
      flex: 1,
      alignContent: 'flex-end',
    },
    text: {color: theme.colors.black, fontSize: 16},
    valueText: {alignSelf: 'flex-end'},
  });

export default createStyles;
