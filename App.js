import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// Import Screens
import SplashScreen from './screen/SplashScreen/SplashScreen';
import Login from './screen/Login/login';
import Home from './screen/Home/Home';
import ButtonTab from './screen/Home/ButtonTab';
import Order from './screen/Home/Order';
import OrderList from './screen/Orders/OrderList';
import Dispatch from './screen/Orders/Dispatch';
import CreateNewShop from './screen/CreateNewShop/CreateNewShop';
import Filter from './screen/Orders/Filter';
import CanceledOrder from './screen/Orders/CanceledOrder';
import Floor from './screen/Home/Floor';
import PlaceOrder from './screen/Floor/PlaceOrder';
import FloorUpdate from './screen/Floor/FloorUpdate';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        /> */}
      <Stack.Screen
        name="Home"
        component={ButtonTab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OrderList"
        component={OrderList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Dispatch"
        component={Dispatch}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateNewShop"
        component={CreateNewShop}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filter"
        component={Filter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CanceledOrder"
        component={CanceledOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Floor"
        component={Floor}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="PlaceOrder"
        component={PlaceOrder}
        options={{headerShown: false}}
      />
       <Stack.Screen
        name="FloorUpdate"
        component={FloorUpdate}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
