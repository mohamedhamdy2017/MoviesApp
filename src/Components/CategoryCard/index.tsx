import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface CardProps {
  index: number;
  title: String;
  onPress: () => void;
  selected: boolean;
}

export const CategoryCard: React.FC<CardProps> = ({
  index,
  title,
  onPress,
  selected,
}: CardProps) => {
  return (
    <TouchableOpacity
      key={`item-${index.toString()}`}
      style={[styles.container, selected && styles.selection]}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={[styles.title, selected && styles.selection]}>{title}</Text>
    </TouchableOpacity>
  );
};
