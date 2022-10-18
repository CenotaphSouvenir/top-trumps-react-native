import StatItem from './StatItem';

export default class BridgeCard {
  readonly name: string;
  readonly type: string;
  readonly location: string;
  readonly image: string;
  readonly cardStats: StatItem[];

  constructor(
    name: string,
    type: string,
    location: string,
    image: string,
    cardStats: StatItem[],
  ) {
    this.name = name;
    this.type = type;
    this.location = location;
    this.image = image;
    this.cardStats = cardStats;
  }
}
