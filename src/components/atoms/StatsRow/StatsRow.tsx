import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {StyleProp, Text, View, ViewStyle} from 'react-native';
import createStyles from './StatsRow.styles';

export interface StatsRowProps {
  statKey: string;
  statValue: number;
  style: StyleProp<ViewStyle>;
}

export const StatsRow: FC<StatsRowProps> = ({statKey, statValue, style}) => {
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
