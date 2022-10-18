import {ImageSourcePropType} from 'react-native';

export default function (image: string): ImageSourcePropType {
  switch (image) {
    case 'humber-bridge.png':
      return require('@src/assets/images/humber-bridge.png');
    case 'brooklyn-bridge.jpg':
      return require('@src/assets/images/brooklyn-bridge.jpg');
      case 'golden-gate.jpg':
        return require('@src/assets/images/golden-gate.jpg');
    default:
      return require('@src/assets/images/broken.png');
  }
}
