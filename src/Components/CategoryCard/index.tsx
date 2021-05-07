import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

interface CardProps {
  title: String;
}

export const CategoryCard: React.FC<CardProps> = ({title}: CardProps) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
