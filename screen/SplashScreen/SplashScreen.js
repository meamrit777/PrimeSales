import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../style/SplashScreen'


const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      AsyncStorage.getItem('user_id').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/companyImage.png')}
        style={{marginTop:30,width: '60%', height: "50%", }}
      />
      <ActivityIndicator
        animating={animating}
        color="#FFFFFF"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );rr
};

export default SplashScreen;

