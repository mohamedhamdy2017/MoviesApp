import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export const MovieDetails: React.FC = () => {
  const navigation = useNavigation();
  const {params} = useRoute();

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
              uri: params?.item?.image,
            }}
            resizeMode="cover"
            style={styles.image}
          />
          <Text style={styles.name}>{params?.item?.title}</Text>
          <Text style={styles.rate}>{params?.item?.vote_average}</Text>
        </View>

        <Text style={styles.sectionTitle}>{'Over view'}</Text>
        <Text style={styles.overView}>{params?.item?.overView}</Text>

        <Text style={styles.sectionTitle}>{'Geners'}</Text>

        <FlatList
          scrollEnabled={false}
          contentContainerStyle={styles.genersList}
          data={params?.item?.geners}
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
          data={params?.item?.credits}
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
