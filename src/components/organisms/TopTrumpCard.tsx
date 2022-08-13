import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import createStyles from './TopTrumpCard.styles';

export const TopTrumpCard: FC = () => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topTrumpCard}>
        <View style={styles.cardImageContainer}>
          <Image
            accessible
            source={require('@src/assets/images/humber-bridge.png')}
            // source={require('@src/assets/images/golden-gate-bridge.jpeg')}
            style={styles.cardImage}
          />
        </View>
        <Text>Humber Bridge</Text>
          <Text>facts facts facts</Text>
      </View>
    </View>
  );
};

export default TopTrumpCard;
