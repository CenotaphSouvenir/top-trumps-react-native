import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {Text, View} from 'react-native';
import createStyles from './StatsRow.styles';

interface StatsRowProps {
  statKey: string;
  statValue: number;
}

export const StatsRow: FC<StatsRowProps> = ({statKey, statValue}) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.row}>
      <View style={styles.keyColumn}>
        <Text style={styles.text}>{statKey}</Text>
      </View>
      <View style={styles.valueColumn}>
        <Text style={styles.text}>{statValue}</Text>
      </View>
    </View>
  );
};

export default StatsRow;
