import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../style/Home';
import Slider from './Slider'
const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 22}}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/menu.png')}
              style={styles.headerImage}></Image>
            <Image source={require('../../assets/companyHeader.png')}></Image>
            <Image
              source={require('../../assets/Notification.png')}
              style={styles.headerImage}></Image>
          </View>
          <Slider/>
          <View style={styles.leaderShip}>
            <View>
              <Text style={styles.textStyle}>LEADERSHIP BOARD</Text>
            </View>
            <View style={styles.leaderShipDescI}>
              <View style={{width: '20%'}}>
                <Image
                  source={require('../../assets/image12.png')}
                  style={{borderRadius: 1000}}></Image>
              </View>
              <View style={{width: '60%'}}>
                <Text style={styles.leaderShipText}> Premendra Shrestha</Text>
              </View>
              <View style={{width: '7%'}}>
                <Image source={require('../../assets/yellowStar.png')}></Image>
              </View>
            </View>
            <View style={styles.leaderShipDescII}>
              <View style={{width: '20%'}}>
                <Image
                  source={require('../../assets/image11.png')}
                  style={{borderRadius: 1000}}></Image>
              </View>
              <View style={{width: '60%'}}>
                <Text style={styles.leaderShipText}> Anil Maharjan</Text>
              </View>
              <View style={{width: '7%'}}>
                <Image source={require('../../assets/grayStar.png')}></Image>
              </View>
            </View>
            <View style={styles.leaderShipDescIII}>
              <View style={{width: '20%'}}>
                <Image
                  source={require('../../assets/profile1.png')}
                  style={{borderRadius: 1000, width: 26, height: 26}}></Image>
              </View>
              <View style={{width: '60%'}}>
                <Text style={styles.leaderShipText}> Rupesh Malla</Text>
              </View>
              <View style={{width: '7%'}}>
                <Image source={require('../../assets/Group485.png')}></Image>
              </View>
            </View>
          </View>
          <View style={styles.menuSection}>
            <View style={styles.menuView}>
              <TouchableOpacity
                onPress={() => navigation.navigate('CreateNewShop')}>
                <Image
                  source={require('../../assets/Component1.png')}
                  style={styles.menuImage}></Image>
                <Text style={styles.menuText}>Create Outlet</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuView}>
              <TouchableOpacity onPress={() => navigation.navigate('Floor')}>
                <Image
                  source={require('../../assets/floor.png')}
                  style={styles.menuImage}></Image>
                <Text style={styles.menuText}>Floor</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.menuView}>
              <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                <Image
                  source={require('../../assets/Component2.png')}
                  style={styles.order}></Image>
                <Text style={styles.menuText}>Order</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.dispatchSection}>
            <Text style={styles.textStyle}>DISPATCH PENDING</Text>
            <View style={styles.leaderShipDesc}>
              <View style={styles.supplierName}>
                <Text style={styles.leaderShipText}>
                  Sukrapath Ashok Supplier
                </Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.leaderShipText}>17/12/2022</Text>
              </View>
            </View>
            <View style={styles.leaderShipDesc}>
              <View style={styles.supplierName}>
                <Text style={styles.leaderShipText}> ST Liquor Shop</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.leaderShipText}>17/12/2022</Text>
              </View>
            </View>
            <View style={styles.leaderShipDesc}>
              <View style={styles.supplierName}>
                <Text style={styles.leaderShipText}> Kamal Madira</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.leaderShipText}>17/12/2022</Text>
              </View>
            </View>
          </View>
          <View style={styles.latestSection}>
            <Text style={styles.textStyle}>LATEST DISPATCH</Text>
            <View style={styles.leaderShipDesc}>
              <View style={styles.supplierName}>
                <Text style={styles.leaderShipText}>Sudip Liquor Store</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.leaderShipText}>17/12/2022</Text>
              </View>
            </View>
            <View style={styles.leaderShipDesc}>
              <View style={styles.supplierName}>
                <Text style={styles.leaderShipText}> Kharel Kirana Pasal</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.leaderShipText}>17/12/2022</Text>
              </View>
            </View>
            <View style={styles.leaderShipDesc}>
              <View style={styles.supplierName}>
                <Text style={styles.leaderShipText}>Kamal Madira</Text>
              </View>
              <View style={{width: '30%'}}>
                <Text style={styles.leaderShipText}>17/12/2022</Text>
              </View>
            </View>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
