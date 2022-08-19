import {Theme} from '@src/styles/theme';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      marginTop: 12,
      marginBottom: 4,
      width: '100%',
      justifyContent: 'flex-start',
    },
    header: {
      fontSize: 24,
      color: theme.colors.black,
      alignItems: 'flex-start',
      marginHorizontal: 8,
    },
  });

export default createStyles;
