import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React from 'react';
import {Image, View} from 'react-native';
import CardHeader from '../atoms/CardHeader/CardHeader';
import StatsGrid from '../molecules/StatsGrid';
import createStyles from './TopTrumpCard.styles';
import bridgeCardData from '@src/assets/bridgeCardData.json';
import BridgeCard from '@src/data/classes/BridgeCardData';
import selectBridgeCardDeck from '@src/data/selectors/selectBridgeCardDeck';
import imagePicker from '@src/styles/utils/imagePicker';

interface TopTrumpCardProps {
  card: BridgeCard;
}

export default function TopTrumpCard() {
  const styles = useThemedStyles(createStyles);
  const bridgeCardDeck = selectBridgeCardDeck(bridgeCardData);
  const currentCard = bridgeCardDeck[0];

  return (
    <View style={styles.cardContainer}>
      <View style={styles.topTrumpCard}>
        <CardHeader
          title={currentCard.name}
          type={currentCard.type}
          location={currentCard.location}
        />
        <View style={styles.cardImageContainer}>
          <Image
            style={styles.image}
            accessible
            source={imagePicker(currentCard.image)}
          />
        </View>
        <StatsGrid cardStats={currentCard.cardStats} />
      </View>
    </View>
  );
}
