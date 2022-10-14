import React, {FC} from 'react';
import {Text as RNText} from 'react-native';

interface TextProps {
  title: string;
}

export const Text: FC<TextProps> = ({title, children}) => {
  return (
    <RNText>
      {children}
      {title}
    </RNText>
  );
};
