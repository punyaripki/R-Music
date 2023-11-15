import {StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Play,Pause} from 'iconsax-react-native';
import React, { useState } from 'react';
import { fontType, colors } from '../theme';
import {useNavigation} from '@react-navigation/native';


const ItemSmall = ({ item }) => {
  const navigation = useNavigation();
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
    <TouchableOpacity onPress={() => navigation.navigate('BlogDetail', {blogId: item.id})}>
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
      <Play
           item={item}
           keyExtractor={item => item.id}
            color={colors.white()} // Pastikan colors.grey() sesuai dengan implementasi Anda
            variant={variant}
            size={25}
            onPress={() => togglePlay(item.id)}
          />
      </View>
    </View>
    </TouchableOpacity>
  );
  
};


export default ItemSmall;
const styles = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
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
    width: 90,
    height: 90,
    borderRadius: 10,
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    position: 'absolute',
    top: 45,
    left: 45,
    right: 45,
    bottom: 45, 
  },
});