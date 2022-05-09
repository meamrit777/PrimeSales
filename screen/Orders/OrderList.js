import {View, Text, Image, ScrollView, TextInput} from 'react-native';
import React from 'react';
import styles from '../../style/OrderList';
import {TouchableOpacity} from 'react-native-gesture-handler';

const OrderList = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{width: '15%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Order')}>
              <Image source={require('../../assets/BackBtn.png')} style={styles.back}></Image>
            </TouchableOpacity>
          </View>
          <View style={{width: '85%'}}>
            <Text style={styles.title}>Order List</Text>
          </View>
        </View>

        <View style={styles.line}>
          <View style={styles.topSection}>
            <View style={{width: '20%'}}>
              <Image
                source={require('../../assets/Home.png')}
                style={styles.homeImage}></Image>
            </View>
            <View style={{width: '56%'}}>
              <Text style={styles.storeTitle}>Vinayak Store Pvt. Ltd.</Text>
              <Text style={styles.storeAdd}>On Trade</Text>
              <Text style={styles.storeAdd}>Ekantakuna | Lalitpur</Text>
              <View style={styles.storeContact}>
                <View>
                  <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
                </View>
                <View>
                  <Text style={styles.visitDay}>(3 days)</Text>
                </View>
              </View>
            </View>
            <View style={{width: '18%'}}>
              <Text style={styles.visitNo}>56 </Text>
              <Text style={styles.visitText}>Visits</Text>
            </View>
          </View>
        </View>

        <ScrollView  nestedScrollEnabled={true}>
          <View style={{paddingLeft: 20, paddingRight: 20}}>
            <View style={styles.boxContainer}>
              <View style={styles.image}>
                <Image source={require('../../assets/Emperor.png')}></Image>
              </View>
              <View style={styles.productDesc}>
                <View>
                  <Text style={styles.productTitle}>Emperor</Text>
                </View>
                <View style={styles.productDetails}>
                  <View>
                    <Text style={styles.quantity}>Full</Text>
                    <Text style={styles.price}>10</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Half</Text>
                    <Text style={styles.price}>150</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Qtr</Text>
                    <Text style={styles.price}>400</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.image}>
                <Image source={require('../../assets/Emperor.png')}></Image>
              </View>
              <View style={styles.productDesc}>
                <View>
                  <Text style={styles.productTitle}>24 Carat</Text>
                </View>
                <View style={styles.productDetails}>
                  <View>
                    <Text style={styles.quantity}>Full</Text>
                    <Text style={styles.price}>10</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Half</Text>
                    <Text style={styles.price}>150</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Qtr</Text>
                    <Text style={styles.price}>400</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.image}>
                <Image source={require('../../assets/highlander.png')}></Image>
              </View>
              <View style={styles.productDesc}>
                <View>
                  <Text style={styles.productTitle}>Highlander P/W</Text>
                </View>
                <View style={styles.productDetails}>
                  <View>
                    <Text style={styles.quantity}>Full</Text>
                    <Text style={styles.price}>10</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Half</Text>
                    <Text style={styles.price}>150</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Qtr</Text>
                    <Text style={styles.price}>400</Text>
                  </View>
                </View>
              </View>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.image}>
                <Image source={require('../../assets/virgin.png')}></Image>
              </View>
              <View style={styles.productDesc}>
                <View>
                  <Text style={styles.productTitle}>Virgin</Text>
                </View>
                <View style={styles.productDetails}>
                  <View>
                    <Text style={styles.quantity}>Full</Text>
                    <Text style={styles.price}>10</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Half</Text>
                    <Text style={styles.price}>150</Text>
                  </View>
                  <View>
                    <Text style={styles.quantity}>Qtr</Text>
                    <Text style={styles.price}>400</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.remarks}>
          <Text style={styles.box}>Remarks *</Text>
          <TextInput style={styles.remarkTextInput}></TextInput>
        </View>
        <View style={styles.buttons}>
          <View style={styles.Btn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('CanceledOrder')}>
              <Text style={styles.btnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Btn}>
            <TouchableOpacity onPress={() => navigation.navigate('Dispatch')}>
              <Text style={styles.btnText}>Dispatch</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderList;
