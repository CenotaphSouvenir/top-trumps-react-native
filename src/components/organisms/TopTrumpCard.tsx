import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {Image, View} from 'react-native';
import CardHeader from '../atoms/CardHeader/CardHeader';
import StatsRow from '../atoms/StatsRow/StatsRow';
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
        <StatsRow statKey="Length (m)" statValue={2220} />
      </View>
    </View>
  );
};

export default TopTrumpCard;
