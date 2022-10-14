import BridgeCard, {BridgeCardStats} from '../classes/BridgeCardData';

export type BridgeCardQuery = {
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

export type BridgeCardDeckQuery = {
  cards: Array<BridgeCardQuery>;
};

export default (data: BridgeCardDeckQuery): Array<BridgeCard> => {
  const bridgeCardDeck = data.cards.map(
    (card): BridgeCard =>
      new BridgeCard(
        card.name,
        card.type,
        card.location,
        card.image,
        new BridgeCardStats(
          card.length,
          card.width,
          card.height,
          card.opened,
          card.lanes,
          card.traffic,
        ),
      ),
  );
  return bridgeCardDeck;
};
