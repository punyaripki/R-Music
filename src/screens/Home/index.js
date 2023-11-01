import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import {SearchNormal,Setting, HambergerMenu, Home2,MusicPlaylist,Play,Pause,Map1,MusicFilter,} from 'iconsax-react-native';
import {BlogList, CategoryList} from '../../../data';
import { fontType, colors } from '../../theme';
import { ListHorizontal, ItemSmall } from '../../components';


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
       <HambergerMenu color={colors.white()} variant="Linear" size={24} />
       <View>
          <Text style={styles.title} color={colors.white()}>R-Music.</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Setting color={colors.white()} variant="Linear" size={24} style={{marginRight: 15}}/>
        </View>
        </View>
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>
      <ListBlog />
      <View style= {styles.footer}>
        <TouchableOpacity onPress={() => 'home'} style={styles.startbottom}>
          <Home2 style={{marginLeft:5,marginRight:20}} color={colors.white()} variant='linear' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => 'search'} style={styles.startbottom}>
          <SearchNormal style={{marginLeft:5,marginRight:20}} color={colors.white()} variant='linear' size={25}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => 'search'} style={styles.startbottom}>
          <MusicPlaylist style={{marginLeft:5,marginRight:20}} color={colors.white()} variant='linear' size={25}/>
          </TouchableOpacity>
        </View>
    </View>
  );
}



const ListBlog = () => {
  const horizontalData = BlogList.slice(0, 5);
  const verticalData = BlogList.slice(4);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.trending}>Trending Right Now</Text>
      <View style={styles.listBlog}>
        <ListHorizontal data={horizontalData} />
        <Text  style={{ color: 'white', paddingHorizontal: 24, fontSize: 20, fontFamily: fontType['Pjs-Bold'],
            }}> Category </Text>
        <View style={{...category.item, marginLeft: 10}}>  
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>Region</Text>
            </View>
   
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>Tools</Text>
            </View>
           
            <View style={{alignItems: 'center', paddingTop: 10}}>
              <Text style={category.textCat}>Time</Text>
            </View>
        </View>
        <View style={styles.listCard}>
          {verticalData.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </View>
    </ScrollView>
    
  );
  
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.grey();
    return (
      <ItemCategory
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 10}} />}
      contentContainerStyle={{paddingHorizontal: 24}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
const ItemCategory = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#27374D',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.white(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  trending:{
    fontSize:20,
    color: colors.white(),
    left: 30,
  },
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  footer: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    bottom:5,
    backgroundColor:'#27374D',
  },
  startbottom: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 150,
  },
});

const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    gap: 20,
    marginHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  itemCat: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
  textCat: {
    color: 'white',
  },
});