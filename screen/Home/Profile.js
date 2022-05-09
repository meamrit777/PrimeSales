import {View, Text, TouchableOpacity, Image,Switch} from 'react-native';
import React,{useState} from 'react';
import styles from '../../style/Profile';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.image}>
<Image
  source={require('../../assets/PP1.png')}
  style={styles.profile}></Image>
<Image
  source={require('../../assets/EditGroup.png')}
  style={styles.ellipse}></Image>
</View>
<View>
<Text style={styles.hello}>Hello,</Text>
</View>
<View>
<Text style={styles.name}>Rupesh Malla</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate(' ')}>
<View style={styles.button}>
  <View style={{width: '20%', alignItems: 'center'}}>
    <Image
      source={require('../../assets/fi-rr-shopping-bag.png')}></Image>
  </View>
  <View style={{width: '60%'}}>
    <Text style={styles.Text}>History</Text>
  </View>
  <View style={{width: '10%', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Image source={require('../../assets/Arrow-Right2.png')}></Image>
    </TouchableOpacity>
  </View>
</View>
</TouchableOpacity>
<View style={{paddingBottom:40}}>
<View>
<Text style={styles.text}>MANAGEMENT</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('')}>
<View style={styles.button}>
  <View style={{width: '20%', alignItems: 'center'}}>
    <Image
      source={require('../../assets/fi-rs-bell-ring.png')}></Image>
  </View>
  <View style={{width: '60%'}}>
    <Text style={styles.Text}>Notifications</Text>
  </View>
  <View style={{width: '10%', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
    <Switch
        trackColor={{ false: "#767577", true: "#00CFE8" }}
        thumbColor={isEnabled ? "#fff" : "#fff"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </TouchableOpacity>
  </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('')}>
<View style={styles.button}>
  <View style={{width: '20%', alignItems: 'center'}}>
    <Image
      source={require('../../assets/EditSquare.png')}></Image>
  </View>
  <View style={{width: '60%'}}>
    <Text style={styles.Text}>My Information</Text>
  </View>
  <View style={{width: '10%', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Image source={require('../../assets/Arrow-Right2.png')}></Image>
    </TouchableOpacity>
  </View>
</View>
</TouchableOpacity>
</View>

<View style={{paddingBottom:40}}>
<View>
<Text style={styles.text}>SUPPORT</Text>
</View>
<TouchableOpacity onPress={() => navigation.navigate('')}>
<View style={styles.button}>
  <View style={{width: '20%', alignItems: 'center'}}>
    <Image
      source={require('../../assets/fi-rs-bell-ring.png')}></Image>
  </View>
  <View style={{width: '60%'}}>
    <Text style={styles.Text}>Help</Text>
  </View>
  <View style={{width: '10%', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Image source={require('../../assets/Arrow-Right2.png')}></Image>
    </TouchableOpacity>
  </View>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate('')}>
<View style={styles.button}>
  <View style={{width: '20%', alignItems: 'center'}}>
    <Image
      source={require('../../assets/Chat.png')}></Image>
  </View>
  <View style={{width: '60%'}}>
    <Text style={styles.Text}>Help</Text>
  </View>
  <View style={{width: '10%', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.navigate('')}>
      <Image source={require('../../assets/Arrow-Right2.png')}></Image>
    </TouchableOpacity>
  </View>
</View>
</TouchableOpacity>
</View></ScrollView>
    </View>
  );
};

export default Profile;
