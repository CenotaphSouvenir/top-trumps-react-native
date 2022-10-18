import {Theme} from '@src/styles/theme';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    headerContainer: {
      marginTop: 12,
      paddingHorizontal: 8,
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    header: {
      fontSize: 24,
      width: '100%',
      color: theme.colors.black,
      fontWeight: '700',
      marginBottom: 4
    },
    type: {
      fontSize: 16,
      color: theme.colors.black,
      fontWeight: '400',
    },
    location: {
      fontSize: 16,
      color: theme.colors.black,
      fontWeight: '400',
    },
  });

export default createStyles;
