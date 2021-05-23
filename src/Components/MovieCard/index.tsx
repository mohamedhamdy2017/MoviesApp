import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import moment from 'moment';

import {getImagePath} from '../../Helpers';
import styles from './styles';

interface CardProps {
  data: {
    genres: Array<GENRE>;
  };
  index: number;
  poster_path: string;
  title: string;
  release_date: string;
  vote_average: string | any;
  genre_ids: Array<string>;
  onPress: () => void;
}

interface GENRE {
  id: string;
  name: string;
}

export const MovieCard: React.FC<CardProps> = ({
  data,
  index,
  poster_path,
  title,
  release_date,
  vote_average,
  genre_ids,
  onPress,
}: CardProps) => {
  const [genresNames, setGenresNames] = useState<Array<String>>([]);

  useEffect(() => {
    let arr: Array<String> = [];
    data?.genres?.filter((genre: GENRE) => {
      if (genre_ids?.includes(genre.id)) {
        arr.push(genre.name);
        setGenresNames(arr);
      }
    });
  }, []);

  return (
    <TouchableOpacity
      key={`item-${index.toString()}`}
      style={styles.container}
      activeOpacity={0.7}
      onPress={onPress}>
      <Image
        source={{uri: getImagePath(poster_path)}}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.details}>
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text style={[styles.title, styles.date]}>
          {moment(release_date).format('LL')}
        </Text>

        <FlatList
          scrollEnabled={false}
          data={genresNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View style={styles.generView} key={`item-${index.toString()}`}>
                <Text style={styles.gener} numberOfLines={1}>
                  {item}
                </Text>
              </View>
            );
          }}
          numColumns={2}
        />
      </View>
      <Text style={styles.rate}>{vote_average * 10}%</Text>
    </TouchableOpacity>
  );
};
