import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Credits, Geners} from '../../Dummy_Data/MovieDetails';
import styles from './styles';

export const MovieDetails: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={[styles.container, {padding: 15}]}
        bounces={false}
        showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={{
              uri: 'https://i.ytimg.com/vi/MJuFdpVCcsY/movieposter_en.jpg',
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.name}>{'Movie'}</Text>
          <Text style={styles.rate}>{'vote'}</Text>
        </View>

        <Text style={styles.sectionTitle}>{'Over view'}</Text>
        <Text style={styles.overView}>
          {
            'Over view Over view Over view Over view Over view Over view Over viewOver view Over view Over view Over view Over view'
          }
        </Text>

        <Text style={styles.sectionTitle}>{'Geners'}</Text>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.genersList}
          data={Geners}
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
          numColumns={4}
        />

        <Text style={styles.sectionTitle}>{'Credits'}</Text>

        <FlatList
          contentContainerStyle={styles.creditList}
          data={Credits}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <View style={styles.itemContainer}>
                <Image
                  source={{uri: item.image}}
                  resizeMode="cover"
                  style={styles.creditImage}
                />
                <Text style={styles.actorName} numberOfLines={1}>
                  {item.title}
                </Text>
              </View>
            );
          }}
          horizontal
        />
      </ScrollView>
    </SafeAreaView>
  );
};
