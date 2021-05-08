import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';

interface CardProps {
  image: ImageSourcePropType;
  title: String;
  release_date: String;
  vote_average: String;
  geners: Array<Gener>;
  onPress: () => void;
}

interface Gener {
  id: String;
  title: String;
}

export const MovieCard: React.FC<CardProps> = ({
  image,
  title,
  release_date,
  vote_average,
  geners,
  onPress,
}: CardProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image source={image} resizeMode="cover" style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.title, styles.date]}>{release_date}</Text>

        <FlatList
          scrollEnabled={false}
          data={geners}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.generView}>
                <Text style={styles.gener} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
      <Text style={styles.rate}>{vote_average}</Text>
    </TouchableOpacity>
  );
};
