import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {View} from 'react-native';
import StatsRow from '../atoms/StatsRow/StatsRow';
import createStyles from './StatsGrid.styles';

export type CardStats = {key: string; value: number}[];
interface StatsGridProps {
  cardStats: {key: string; value: number; highestWins: boolean}[];
}

export const StatsGrid: FC<StatsGridProps> = ({cardStats}) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      {cardStats.map((stat, index) => (
        <StatsRow key={index} statKey={stat.key} statValue={stat.value} highestWins />
      ))}
    </View>
  );
};

export default StatsGrid;
