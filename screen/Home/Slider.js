import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from '../../style/Slider';
import Swiper from 'react-native-swiper';
import { reverse } from 'lodash-es';

const Slider = () => {
  return (
    <Swiper
      style={{height: 230}}
      showsButtons={true}
      autoplay={true}
      showsButtons={false}
      activeDotColor="#00CFE8">
      <View style={styles.salesOfficer}>
        <View style={styles.salesHeader}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/profile1.png')}
              style={styles.Image}></Image>
          </View>
          <View style={{width: '50%'}}>
            <Text style={styles.textStyle}>RUPESH MALLA</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/image1.png')}
                style={styles.image}></Image>
              <Text style={styles.salesText}>SALES OFFICER</Text>
            </View>
          </View>
          <View style={{width: '37%'}}>
            <View style={styles.rightView}>
              <Text style={styles.rightViewText}>10 March, 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.desc}>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL ORDER COLLECTED</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>395</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL DISPATCH</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>205</Text>
          </View>
        </View>
        <View style={styles.desc}>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL VISITS</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>56</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL PENDING</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>90</Text>
          </View>
        </View>
      </View>

      <View style={styles.salesOfficer}>
        <View style={styles.salesHeader}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/profile1.png')}
              style={styles.Image}></Image>
          </View>
          <View style={{width: '50%'}}>
            <Text style={styles.textStyle}>RUPESH MALLA</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/image1.png')}
                style={styles.image}></Image>
              <Text style={styles.salesText}>SALES OFFICER</Text>
            </View>
          </View>
          <View style={{width: '37%'}}>
            <View style={styles.rightView}>
              <Text style={styles.rightViewText}>10 March, 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.desc}>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL ORDER COLLECTED</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>395</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL DISPATCH</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>205</Text>
          </View>
        </View>
        <View style={styles.desc}>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL VISITS</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>56</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL PENDING</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>90</Text>
          </View>
        </View>
      </View>

      <View style={styles.salesOfficer}>
        <View style={styles.salesHeader}>
          <View style={{width: '20%'}}>
            <Image
              source={require('../../assets/profile1.png')}
              style={styles.Image}></Image>
          </View>
          <View style={{width: '50%'}}>
            <Text style={styles.textStyle}>RUPESH MALLA</Text>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/image1.png')}
                style={styles.image}></Image>
              <Text style={styles.salesText}>SALES OFFICER</Text>
            </View>
          </View>
          <View style={{width: '37%'}}>
            <View style={styles.rightView}>
              <Text style={styles.rightViewText}>10 March, 2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.desc}>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL ORDER COLLECTED</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>395</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL DISPATCH</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>205</Text>
          </View>
        </View>
        <View style={styles.desc}>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL VISITS</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>56</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.descStyle}>TOTAL PENDING</Text>
          </View>
          <View style={styles.Desc}>
            <Text style={styles.numberStyle}>90</Text>
          </View>
        </View>
      </View>
    </Swiper>
  );
};

export default Slider;
