import createStyles from '@src/components/atoms/CardHeader/CardHeader.styles';
import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface CardHeaderProps {
  title: string;
}

const CardHeader: FC<CardHeaderProps> = ({title}) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

export default CardHeader;
