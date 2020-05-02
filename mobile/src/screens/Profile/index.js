import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, AsyncStorage } from 'react-native'
import styles from './styles';

import axios from 'axios';

import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default function Profile({ navigation }) {
  async function getData() {
    const token = await AsyncStorage.getItem('jwt');

    const headers = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }

    const response = await axios.get('users', headers);

    console.log(response);
  }

  useEffect(async () => {
    await getData();
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <View style={styles.logoutContainer}>
          <Icon style={styles.logoutIcon} name='logout'></Icon>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
        <Image
          style={styles.logo}
          source={require('../../../assets/logoEscuro.png')}
        />
        <View style={styles.firstRowSpacer} />
      </View>

      <View style={styles.basicInformationRow}>
        <Text style={styles.basicInformation}>ACTIVE |</Text>
        <Text style={styles.basicInformation}> MALE |</Text>
        <Text style={styles.basicInformation}> BORN 3.5.2002</Text>
      </View>

      <View style={styles.playerPhotoName}>
        <Image
          source={{
            uri: 'https://pbs.twimg.com/profile_images/1236082038014447618/peWO3tpF_400x400.jpg'
          }} style={styles.playerPhoto} />
        < Text style={styles.playerName} > Player 1</Text>
      </View>

      <View style={styles.mainInfoContainer}>
        <View style={styles.mainInfo}>
          <Icon name="account-card-details" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>NAME: PLAYER X DA SILVA</Text>
        </View>

        <View style={styles.mainInfo}>
          <Icon name="cellphone-android" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>PHONE: 918764567</Text>
        </View>

        <View style={styles.mainInfo}>
          <Icon name="soccer-field" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>POSITION: FORWARD</Text>
        </View>

        <View style={[styles.mainInfo, styles.mainInfoLast]} >
          <Icon name="calendar" style={styles.mainInfoIcon} />
          <Text style={styles.mainInfoText}>AGE: 18 YEARS</Text>
        </View>
      </View>

      <View style={styles.spacer} />
      <TouchableOpacity style={styles.editInfo} onPress={() => navigation.navigate('EditInfo')}><Text style={styles.editInfoText}>Edit Info</Text></TouchableOpacity>
      <View style={styles.spacer} />
    </View >
  )
}
