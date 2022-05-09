import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FeatherIcons from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Image, TouchableOpacity, View} from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
import Home from '../Home/Home';
import Order from './Order';
import Scan from './Scan';
import Route from './Route';
import Profile from './Profile';
import SplashScreen from '../SplashScreen/SplashScreen';
import {useNavigation} from '@react-navigation/native';
const TabbarScreen = () => {
  const navigation = useNavigation();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{activeTintColor: '#00CFE8', inactiveTintColor: '#5B5B5B'}}
      barStyle={{backgroundColor: '#F5F5F5'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontWeight: '500', fontSize: 10},
          shifting: 'true',
          tabBarColor: '#E5E5E5',
          tabBarIcon: ({color, size}) => (

            <FeatherIcons name="home" color={color} size={30} />
          ),
        }}
      />

      <Tab.Screen
        name="Order"
        component={Order}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontWeight: '500', fontSize: 10},
          tabBarIcon: ({color, size}) => (
            <Icons name="truck-delivery-outline" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          headerShown: false,

          tabBarLabelStyle: {fontWeight: '500', fontSize: 10},
          tabBarIcon: ({color, size}) => (
            <Icons name="qrcode-scan" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Route"
        component={Route}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontWeight: '500', fontSize: 10},
          tabBarIcon: ({color, size}) => (
            <Icon name="route" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarLabelStyle: {fontWeight: '500', fontSize: 10},
          tabBarIcon: ({color, size}) => (
            <FeatherIcons name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabbarScreen;
