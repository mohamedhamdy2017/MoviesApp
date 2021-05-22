import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCredits} from '../../Hooks/useCredits';
import {useGeners} from '../../Hooks/useGeners';

import {getImagePath} from '../../Helpers';
import styles from './styles';
import {LoadingModal} from '../../Components/LoadingModal';

interface ITEM {
  adult: boolean;
  backdrop_path: string;
  id: string | number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  video: boolean;
  vote_count: number;
  poster_path: string;
  vote_average: string | any;
  title: string;
  release_date: string;
  genre_ids: Array<number>;
}

interface GENRE {
  id: number | string;
  name: string;
}

export const MovieDetails: React.FC = () => {
  const navigation = useNavigation();
  const {item} = useRoute().params;

  const [genresNames, setGenresNames] = useState<Array<String>>([]);

  const {data: Geners} = useGeners();
  const {data: credits, isLoading} = useCredits(item.id);

  useEffect(() => {
    let arr: Array<String> = [];
    Geners.genres?.filter((genre: GENRE) => {
      if (item?.genre_ids?.includes(genre.id)) {
        arr.push(genre.name);
        setGenresNames(arr);
      }
    });
  }, [Geners.genres]);

  return (
    <SafeAreaView style={styles.container}>
      <Icon name="chevron-left" size={40} onPress={() => navigation.goBack()} />
      <ScrollView
        style={[styles.container, {padding: 15}]}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: getImagePath(item?.poster_path),
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.name}>{item?.title}</Text>
          <Text style={styles.rate}>{item?.vote_average * 10}%</Text>
        </View>

        <Text style={styles.sectionTitle}>{'Over view'}</Text>
        <Text style={styles.overView}>{item?.overview}</Text>

        <Text style={styles.sectionTitle}>{'Geners'}</Text>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.genersList}
          data={genresNames}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.generView}>
                <Text style={styles.gener} numberOfLines={1}>
                  {item}
                </Text>
              </View>
            );
          }}
          numColumns={4}
        />

        <Text style={styles.sectionTitle}>{'Credits'}</Text>

        <FlatList
          contentContainerStyle={styles.creditList}
          data={credits?.cast}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer} key={item.id}>
                <Image
                  source={{uri: getImagePath(item.profile_path)}}
                  resizeMode="cover"
                  style={styles.creditImage}
                />
                <Text style={styles.actorName} numberOfLines={1}>
                  {item.name}
                </Text>
              </View>
            );
          }}
          horizontal
        />
      </ScrollView>
      <LoadingModal visible={isLoading} />
    </SafeAreaView>
  );
};
