import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/Filter';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
const Filter = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Pressable onPress={() => navigation.navigate('Order')}>
              <Image source={require('../../assets/BackBtn.png')} style={styles.back}></Image>
            </Pressable>
          </View>
          <View style={{width:"85%"}}>
            <Text style={styles.title}>Filter</Text>
          </View>
        </View>
        <View style={styles.Header}>
          <View style={styles.pendingView}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.pendingText}>Pending</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.allView}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.allText}>All</Text>
            </TouchableOpacity>
          </View>
          <View style={{width: '10%'}}>
            <TouchableOpacity onPress={() => handleFilterModalPress()}>
              <Image
                source={require('../../assets/Filter.png')}
                style={styles.filterImage}></Image>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TextInput style={styles.textInput} keyboardType="numeric" />
        </View>
        <View style={styles.areaSec}>
          <Text style={styles.text}>Bhanimandal </Text>
          <Text style={styles.text}>5 Result found</Text>
        </View>
        <View style={styles.topSection}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/Home.png')}
              style={styles.homeImage}></Image>
          </View>
          <View style={{width: '55%'}}>
            <Text style={styles.storeTitle}>Vinayak Store Pvt. Ltd.</Text>
            <Text style={styles.storeAdd}>Ekantakuna | Lalitpur</Text>
            <View style={styles.storeContact}>
              <View>
                <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.visitNo}>56 </Text>
            <Text style={styles.visitText}>Visits</Text>
          </View>
        </View>

        <View style={styles.Section}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/Home.png')}
              style={styles.homeImage}></Image>
          </View>
          <View style={{width: '55%'}}>
            <Text style={styles.storeTitle}>Chaudhary Store Pvt. Ltd.</Text>
            <Text style={styles.storeAdd}>Hattisar | Kathmandu</Text>
            <View style={styles.storeContact}>
              <View>
                <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.visitNo}>12 </Text>
            <Text style={styles.visitText}>Visits</Text>
          </View>
        </View>

        <View style={styles.Section}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/Home.png')}
              style={styles.homeImage}></Image>
          </View>
          <View style={{width: '55%'}}>
            <Text style={styles.storeTitle}>Radhe Store Pvt. Ltd.</Text>
            <Text style={styles.storeAdd}>Koteshwor | Kathmandu</Text>
            <View style={styles.storeContact}>
              <View>
                <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.visitNo}>12 </Text>
            <Text style={styles.visitText}>Visits</Text>
          </View>
        </View>

        <View style={styles.Section}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/Home.png')}
              style={styles.homeImage}></Image>
          </View>
          <View style={{width: '55%'}}>
            <Text style={styles.storeTitle}>Bekha Store Pvt. Ltd.</Text>
            <Text style={styles.storeAdd}>Hattisar | Kathmandu</Text>
            <View style={styles.storeContact}>
              <View>
                <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.visitNo}>12 </Text>
            <Text style={styles.visitText}>Visits</Text>
          </View>
        </View>

        <View style={styles.Section}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/Home.png')}
              style={styles.homeImage}></Image>
          </View>
          <View style={{width: '55%'}}>
            <Text style={styles.storeTitle}>Jeevan Store Pvt. Ltd.</Text>
            <Text style={styles.storeAdd}>Suryabinayak | Bhaktapur</Text>
            <View style={styles.storeContact}>
              <View>
                <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
              </View>
            </View>
          </View>
          <View style={{width: '20%'}}>
            <Text style={styles.visitNo}>12 </Text>
            <Text style={styles.visitText}>Visits</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Filter;
