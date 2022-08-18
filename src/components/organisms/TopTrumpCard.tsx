import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {Image, Text, View} from 'react-native';
import CardHeader from '../atoms/CardHeader/CardHeader';
import createStyles from './TopTrumpCard.styles';

export const TopTrumpCard: FC = () => {
  const styles = useThemedStyles(createStyles);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.topTrumpCard}>
        <CardHeader title="Humber Bridge" />
        <View style={styles.cardImageContainer}>
          <Image
            accessible
            source={require('@src/assets/images/humber-bridge.png')}
          />
        </View>
        <Text>facts facts facts</Text>
      </View>
    </View>
  );
};

export default TopTrumpCard;
