import StatItem from '@src/data/classes/StatItem';
import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {View} from 'react-native';
import StatsRow from '../atoms/StatsRow/StatsRow';
import createStyles from './StatsGrid.styles';

export type CardStats = {key: string; value: number}[];
interface StatsGridProps {
  cardStats: StatItem[];
}

export const StatsGrid: FC<StatsGridProps> = ({cardStats}) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.container}>
      {cardStats.map(stat => (
        <StatsRow
          key={stat.index}
          statKey={stat.statKey}
          statValue={stat.statValue}
          highestWins={stat.highestWins}
        />
      ))}
    </View>
  );
};

export default StatsGrid;
