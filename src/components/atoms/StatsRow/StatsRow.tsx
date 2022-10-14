import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import createStyles from './StatsRow.styles';

interface StatsRowProps {
  statKey: string;
  statValue: number;
  highestWins: boolean
  style?: StyleProp<ViewStyle>;
}

export const StatsRow: FC<StatsRowProps> = ({statKey, statValue, highestWins, style}) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={[style, styles.row]}>
      <View style={styles.keyColumn}>
        <Text style={[styles.text]}>{statKey}</Text>
      </View>
      <View style={styles.valueColumn}>
        <Text style={[styles.text, styles.valueText]}>{statValue}</Text>
      </View>
    </View>
  );
};

export default StatsRow;
