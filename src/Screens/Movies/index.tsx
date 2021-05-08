import React, {useState} from 'react';
import {FlatList, Text, SafeAreaView} from 'react-native';
import {MovieCard} from '../../Components/MovieCard';
import {CategoryCard} from '../../Components/CategoryCard';
import styles from './styles';
import {cat_data, movies_data} from 'src/Dummy_Data/Movies';

export const Movies: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const renderHeaderItem = ({item, index}: {item: Object; index: number}) => {
    const selected = selectedCategoryIndex == index;
    return (
      <CategoryCard
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
      />
    );
  };

  const renderMoviesItem = ({item, index}: {item: Object; index: number}) => {
    return (
      <MovieCard
        image={{uri: item.image}}
        vote_average={item.vote_average}
        title={item.title}
        release_date={item.release_date}
        geners={item.geners}
      />
    );
  };

  return (
    <SafeAreaView>
      <Text style={styles.head}>{'Movies'}</Text>
      {ListHeaderComponent()}
      <FlatList
        data={movies_data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderMoviesItem}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};
