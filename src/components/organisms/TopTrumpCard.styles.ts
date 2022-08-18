import {Theme} from '@src/styles/theme';
import {StyleSheet} from 'react-native';

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    cardContainer: {
      flex: 1,
      flexDirection: 'column',
      alignContent: 'center',
      height: '100%',
      width: '100%',
    },
    topTrumpCard: {
      borderColor: theme.colors.grey80,
      borderWidth: 1,
      margin: 6,
      alignItems: 'center',
      backgroundColor: theme.colors.grey10,
      borderRadius: 6,
    },
    cardImageContainer: {
      height: '66%',
      width: '96%',
      marginTop: 8,
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 6,
    },
  });

export default createStyles;
