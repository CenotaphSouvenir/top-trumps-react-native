export default class BridgeCard {
  readonly name: string;
  readonly type: string;
  readonly location: string;
  readonly image: string;
  readonly cardStats: BridgeCardStats;

  constructor(
    name: string,
    type: string,
    location: string,
    image: string,
    cardStats: BridgeCardStats,
  ) {
    this.name = name;
    this.type = type;
    this.location = location;
    this.image = image;
    this.cardStats = cardStats;
  }
}

export class BridgeCardStats {
  readonly length: number;
  readonly width: number;
  readonly height: number;
  readonly yearOpened: number;
  readonly lanes: number;
  readonly vehiclesPerDay: number;

  constructor(
    length: number,
    width: number,
    height: number,
    yearOpened: number,
    lanes: number,
    vehiclesPerDay: number,
  ) {
    this.length = length;
    this.width = width;
    this.height = height;
    this.yearOpened = yearOpened;
    this.lanes = lanes;
    this.vehiclesPerDay = vehiclesPerDay;
  }
}
