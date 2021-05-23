import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, SafeAreaView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {MovieCard} from '../../Components/MovieCard';
import {CategoryCard} from '../../Components/CategoryCard';
import styles from './styles';
import {cat_data} from '../../Dummy_Data/Movies';
import {LoadingModal} from '../../Components/LoadingModal';
import {useMovies} from '../../Hooks/useMovies';
import {useGeners} from '../../Hooks/useGeners';

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

  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [type, setType] = useState<string>('upcoming');
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [movies, setMovies] = useState<Array<ITEM>>([]);

  const {data: moviesData, refetch, isFetching: fetchMoviesLoading} = useMovies(
    type,
    pageNumber,
  );
  const {data: genersData, isFetching: fetchGenersLoading} = useGeners();

  useEffect(() => {
    const type =
      selectedCategoryIndex == 0
        ? 'upcoming'
        : selectedCategoryIndex == 1
        ? 'popular'
        : 'top_rated';
    setType(type);
    setPageNumber(1);
    setMovies([]);
  }, [selectedCategoryIndex]);

  useEffect(() => {
    if (moviesData?.pages) {
      setMovies(prev => [...prev, ...moviesData?.pages[0].results]);
    }
  }, [moviesData]);

  useEffect(() => {
    refetch();
  }, [type, pageNumber]);

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
        data={genersData}
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
    setPageNumber(old => old + 1);
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
          onEndReached={onEndReached}
          onEndReachedThreshold={1}
        />
        <LoadingModal visible={fetchMoviesLoading || fetchGenersLoading} />
      </View>
    </SafeAreaView>
  );
};
