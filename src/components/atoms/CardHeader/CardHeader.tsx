import createStyles from '@src/components/atoms/CardHeader/CardHeader.styles';
import {useThemedStyles} from '@src/hooks/useThemedStyles';
import React, {FC} from 'react';
import {Text, View} from 'react-native';

interface CardHeaderProps {
  title: string;
  type: string;
  location: string;
}

const CardHeader: FC<CardHeaderProps> = ({title, type, location}) => {
  const styles = useThemedStyles(createStyles);

  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{title}</Text>
      <Text style={styles.type}>{type}</Text>
      <Text style={styles.location}>{location}</Text>
    </View>
  );
};

export default CardHeader;
