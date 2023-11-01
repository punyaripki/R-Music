
import {ScrollView, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {Edit, ArrowCircleLeft, InfoCircle, LogoutCurve, Setting2, MessageQuestion} from 'iconsax-react-native';

import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';





const Profile = () => {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <ArrowCircleLeft color={'rgb(22, 179, 179)'} variant="Linear" size={28} />
          </TouchableOpacity>
          <Text style={styles.title}>Profile</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={profile.cardProfile}>
            <Image style={profile.pic} source={{ uri: 'https://media.licdn.com/dms/image/D5603AQEIpqnjQqkSpA/profile-displayphoto-shrink_800_800/0/1698759551331?e=2147483647&v=beta&t=UyGrO1N2WYpUuWC9faykVTT21OvTcKBGXRh8TlsXzV0'}} />
            <View>
              <Text style={profile.text}>{ProfileData.name}</Text>
              <Text style={profile.info}>{ProfileData.createdAt}</Text>
            </View>
          </View>
            <TouchableOpacity style={profile.editProfile}>
              <Text style={profile.textEdit}>Edit Profile</Text>
            </TouchableOpacity>
          <View style={styles.cardItem}>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <MessageQuestion color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
                </View>
              <Text style={profile.text}>Help & FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <InfoCircle color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>About</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <Setting2 color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Pengaturan</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardContent}>
              <View style={{paddingRight: 16}}>
                <LogoutCurve color={'rgba(22, 179, 179, 0.8)'} variant="Linear" size={24} />
              </View>
              <Text style={profile.text}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <MenuBar /> */}
      </View>
    );
  };
  export default Profile;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27374D',
  },
    cardContainer: {
      flex: 1,
      backgroundColor: 'rgba(22, 179, 179, 0.1)',
      borderRadius: 10,
      margin: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: 'rgba(22, 179, 179, 0.2)',
      paddingHorizontal: 20,
      paddingVertical: 15,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
    },
    title: {
      fontSize: 22,
      fontFamily: fontType['Pjs-Medium'],
      color: 'rgb(22, 179, 179)',
      marginLeft: 110,
    },
    cardItem: {
        paddingHorizontal: 22,
        paddingVertical: 16,
      },
      cardContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 12,
      },
    });
    const profile = StyleSheet.create({
      pic: {
        width: 110,
        height: 110,
        borderRadius: 100,
      },
      title: {
        fontSize: 22,
        fontFamily: fontType['Pjs-Bold'],
        color: colors.white(),
      },
      text: {
        fontSize: 16,
        fontFamily: fontType['Pjs-SemiBold'],
        color: 'rgb(22, 179, 179)',
      },
      cardProfile: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingTop: 28,
        paddingBottom: 12,
      },
      name: {
        fontSize: 14,
        fontFamily: fontType['Pjs-Bold'],
        color: 'rgb(148, 108, 82)',
      },
      info: {
        fontSize: 12,
        fontFamily: fontType['Pjs-Medium'],
        color: 'rgba(22, 179, 179, 0.7)',
      },
      editProfile: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#27374D',
        paddingVertical: 5,
        marginHorizontal: 16,
        marginBottom: 16,
        borderRadius: 12,
      },
      textEdit: {
        fontSize: 18,
        fontFamily: fontType['Pjs-Bold'],
        color: 'rgb(255, 255, 255)',
      },
    });    