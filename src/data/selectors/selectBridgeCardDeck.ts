import BridgeCard from '../classes/BridgeCardData';
import StatItem from '../classes/StatItem';

type BridgeCardQuery = {
  name: string;
  type: string;
  location: string;
  image: string;
  length: number;
  width: number;
  height: number;
  opened: number;
  lanes: number;
  traffic: number;
};

type CardStatRule = {
  index: number;
  label: string;
  highestWins: boolean;
};

type BridgeCardDeckQuery = {
  cardStatRules: {
    length: CardStatRule;
    width: CardStatRule;
    height: CardStatRule;
    opened: CardStatRule;
    lanes: CardStatRule;
    traffic: CardStatRule;
  };
  cards: Array<BridgeCardQuery>;
};

export default (data: BridgeCardDeckQuery): Array<BridgeCard> => {
  const cardStatRules = data.cardStatRules;
  const bridgeCardDeck = data.cards.map(
    (card): BridgeCard =>
      new BridgeCard(card.name, card.type, card.location, card.image, [
        new StatItem(
          cardStatRules.length.index,
          cardStatRules.length.label,
          card.length,
          cardStatRules.length.highestWins,
        ),
        new StatItem(
          cardStatRules.width.index,
          cardStatRules.width.label,
          card.width,
          cardStatRules.width.highestWins,
        ),
        new StatItem(
          cardStatRules.height.index,
          cardStatRules.height.label,
          card.height,
          cardStatRules.height.highestWins,
        ),
        new StatItem(
          cardStatRules.opened.index,
          cardStatRules.opened.label,
          card.opened,
          cardStatRules.opened.highestWins,
        ),
        new StatItem(
          cardStatRules.lanes.index,
          cardStatRules.lanes.label,
          card.lanes,
          cardStatRules.lanes.highestWins,
        ),
        new StatItem(
          cardStatRules.traffic.index,
          cardStatRules.traffic.label,
          card.traffic,
          cardStatRules.traffic.highestWins,
        ),
      ]),
  );
  return bridgeCardDeck;
};
