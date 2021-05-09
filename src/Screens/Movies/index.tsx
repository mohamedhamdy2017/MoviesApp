import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MovieCard} from '../../Components/MovieCard';
import {CategoryCard} from '../../Components/CategoryCard';
import styles from './styles';
import {cat_data} from '../../Dummy_Data/Movies';
import {useDispatch, useSelector} from 'react-redux';
import {get_genres, get_movies} from '../../Store/actions/MoviesActions';
import {LoadingModal} from '../../Components/LoadingModal';

interface ITEM {
  poster_path: string;
  vote_average: string;
  title: string;
  release_date: string;
  genre_ids: Array<string>;
}

interface CATEGORYITEMPROPS {
  title: string;
}

export const Movies: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [type, setType] = useState<string>('upcoming');

  const {movies, page, loading} = useSelector((state: any) => {
    return {
      movies: state.movies.movies,
      page: state.movies.page,
      loading: state.movies.loading,
    };
  });

  useEffect(() => {
    const type =
      selectedCategoryIndex == 0
        ? 'upcoming'
        : selectedCategoryIndex == 1
        ? 'popular'
        : 'top_rated';
    setType(type);
  }, [selectedCategoryIndex]);

  useEffect(() => {
    dispatch(get_movies({type, page: 1}));
    dispatch(get_genres());
  }, [selectedCategoryIndex]);

  const renderHeaderItem = ({
    item,
    index,
  }: {
    item: CATEGORYITEMPROPS;
    index: number;
  }) => {
    const selected = selectedCategoryIndex == index;

    return (
      <CategoryCard
        index={index}
        title={item.title}
        onPress={() => {
          setSelectedCategoryIndex(index);
        }}
        selected={selected}
      />
    );
  };

  const ListHeaderComponent = () => {
    return (
      <FlatList
        data={cat_data}
        style={{height: 80}}
        contentContainerStyle={{alignItems: 'center'}}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderHeaderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={8}
      />
    );
  };

  const renderMoviesItem = ({item, index}: {item: ITEM; index: number}) => {
    return (
      <MovieCard
        index={index}
        poster_path={item.poster_path}
        vote_average={item.vote_average}
        title={item.title}
        release_date={item.release_date}
        genre_ids={item.genre_ids}
        onPress={() => navigation.navigate('MovieDetails', {item})}
      />
    );
  };

  const onEndReached = () => {
    dispatch(get_movies({type, page: page + 1}));
  };

  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text style={styles.head}>{'Movies'}</Text>
        {ListHeaderComponent()}
        <FlatList
          contentContainerStyle={{paddingBottom: 120}}
          data={movies}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderMoviesItem}
          showsVerticalScrollIndicator={false}
          initialNumToRender={8}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
        />
        <LoadingModal visible={loading} />
      </View>
    </SafeAreaView>
  );
};
