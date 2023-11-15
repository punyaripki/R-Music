import {StyleSheet, Text, View, ScrollView, TouchableOpacity,Image} from 'react-native';
import React, {useState} from 'react';
import {ArrowLeft, ArrowCircleDown2,AddCircle, } from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {Library,ProfileData,BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../theme';
import { ItemSmall } from '../../components';

const BlogDetail = ({route}) => {
  const {blogId} = route.params;
  const selectedBlog = Library.find(blog => blog.id === blogId);
  const navigation = useNavigation();
    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft
            color={colors.grey(0.6)}
            variant="Linear"
            size={24}
          />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: selectedBlog.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}>
        </FastImage>
        <Text style={styles.title}>{selectedBlog.title}</Text>
        <Text style={styles.content}>{selectedBlog.content}</Text>
          <View  style={styles.cardprofile}>
          <Image style={styles.pic} source={{ uri: 'https://media.licdn.com/dms/image/D5603AQEIpqnjQqkSpA/profile-displayphoto-shrink_800_800/0/1698759551331?e=2147483647&v=beta&t=UyGrO1N2WYpUuWC9faykVTT21OvTcKBGXRh8TlsXzV0'}} />
          <View>
            <Text style={styles.text}>{ProfileData.name}</Text>
          </View>
          </View>
          <View style={styles.cardicon}>
          <ArrowCircleDown2 color={colors.grey(0.6)} variant="Linear" size={34}/>
          <AddCircle color={colors.grey(0.6)} variant="Linear" size={34} left={10}/>
          </View>
          <ListBlog />
      </ScrollView>
    </View>
    
  );
};
export default BlogDetail;
const ListBlog = () => {
  
  const verticalData = BlogList.slice(0);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
    </ScrollView>
    
  );
  
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.latar(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.latar(),
  },
  bottomBar: {
    position: 'absolute',
    zIndex: 1000,
    backgroundColor: colors.white(),
    paddingVertical: 14,
    paddingHorizontal: 60,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
    marginBottom: 2,
  },
  content: {
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10, 
    lineHeight: 20,
    marginTop: 15,
    marginBottom: 2,
  },
  cardprofile:{
    flexDirection: 'row',
    alignItems:'center',
    left:5,
    
  },
  pic: {
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  text:{
    left:10,
    color: colors.white(),
  },
  cardicon : {
    flexDirection:'row',
    alignItems:'center',
    top:15,
  },
  listCard: {
    paddingHorizontal: 4,
    paddingVertical: 10,
    gap: 15,
    top:15,
  },
});