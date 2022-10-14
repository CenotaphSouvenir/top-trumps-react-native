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
      borderRadius: 6,
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: theme.colors.white,
    },
    cardImageContainer: {
      height: '60%',
      width: '96%',
      marginTop: 8,
      overflow: 'hidden',
      borderRadius: 6,
      justifyContent: 'center'
    },
    image: {
      width: 400,
      height: 400,
    },
  });

export default createStyles;
