export default class StatItem {
  readonly index: number;
  readonly statKey: string;
  readonly statValue: number;
  readonly highestWins: boolean;

  constructor(
    index: number,
    statKey: string,
    statValue: number,
    highestWins: boolean,
  ) {
    this.index = index;
    this.statKey = statKey;
    this.statValue = statValue;
    this.highestWins = highestWins;
  }
}
