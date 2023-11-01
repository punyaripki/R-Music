import {StyleSheet, Text, View,FlatList} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Play,Pause} from 'iconsax-react-native';
import React, { useState } from 'react';
import { fontType, colors } from '../theme';


const ItemSmall = ({ item }) => {
  const [isTouch, setPause] = useState([]);

  const togglePlay = (itemId) => {
    if (isTouch.includes(itemId)) {
      setPause(isTouch.filter((id) => id !== itemId));
    } else {
      setPause([...isTouch, itemId]);
    }
  };

  const variant = isTouch.includes(item.id) ? <Pause color={colors.white()} variant="Linear" size={20}/> : <Play color={colors.white()} variant="Linear" size={20}
  />;
 
  return (
    <View style={styles.cardItem}>
      <FastImage
        style={styles.cardImage}
        source={{
          uri: item.image,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.high,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardContent}>
        <View style={{ flexDirection: 'row', gap: 30 }}>
          <View style={{ gap: 5, flex: 1 }}>
            <Text style={styles.cardCategory}>{item.category}</Text>
            <Text style={styles.cardTitle}>{item.title}</Text>
          </View>
          <Play
           item={item}
           keyExtractor={item => item.id}
            color={colors.grey(0.6)} // Pastikan colors.grey() sesuai dengan implementasi Anda
            variant={variant}
            size={20}
            onPress={() => togglePlay(item.id)}
          />
        </View>
      </View>
    </View>
  );
  
};

export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 13,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 40,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.grey(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});