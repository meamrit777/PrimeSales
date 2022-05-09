import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/CanceledOrder';
import {Provider, Surface} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const CanceledOrder = ({navigation}) => {
  // const [showDropDown, setShowDropDown] = useState(false);
  // const [remarks, setRemarks] = useState('');
  // const remarksList = [
  //   {
  //     label: 'Payment Overdue',
  //     value: 'Payment Overdue',
  //   },
  //   {
  //     label: 'Stock Out',
  //     value: 'Stock Out',
  //   },
  // ];
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={{width:"15%"}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('OrderList')}>
                <Image source={require('../../assets/BackBtn.png')}></Image>
              </TouchableOpacity>
            </View>
            <View style={{width:'85%'}}>
              <Text style={styles.title}>Canceled Orders</Text>
            </View>
          </View>
          <View style={styles.line}>
            <View style={styles.topSection}>
              <View style={{width: '20%'}}>
                <Image
                  source={require('../../assets/Home.png')}
                  style={styles.homeImage}></Image>
              </View>
              <View style={{width: '50%'}}>
                <Text style={styles.storeTitle}>Vinayak Store Pvt. Ltd.</Text>
                <Text style={styles.storeAdd}>On Trade</Text>
                <Text style={styles.storeAdd}>Ekantakuna | Lalitpur</Text>
                <View style={styles.storeContact}>
                  <View>
                    <Text style={styles.visitDate}>
                      Last visited: 01-04-2021
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{width: '20%'}}>
                <Text style={styles.visitNo}>56 </Text>
                <Text style={styles.visitText}>Visits</Text>
              </View>
            </View>
          </View>
          <View>
            <Text style={styles.KRP}>KRP: Krishna Giri</Text>
          </View>
          <View style={styles.dropDownMenuFull}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Payment Overdue" value="Payment Overdue" />
              <Picker.Item label="Stock Out" value="Stock Out" />
            </Picker>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>REMARKS</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <View>
            <View style={styles.editCon}>
              <View style={styles.editSec}>
                <Text style={styles.edit}>Edit</Text>
                <Image source={require('../../assets/Edit.png')}></Image>
              </View>
              <View style={{padding: 20}}>
                <ScrollView>
                  <View style={styles.boxContainer}>
                    <View style={styles.image}>
                      <Image
                        source={require('../../assets/Emperor.png')}></Image>
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
                      <Image
                        source={require('../../assets/highlander.png')}></Image>
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
                      <Image
                        source={require('../../assets/Emperor.png')}></Image>
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
                      <Image
                        source={require('../../assets/virgin.png')}></Image>
                    </View>
                    <View style={styles.productDesc}>
                      <View>
                        <Text style={styles.productTitle}>Virgin</Text>
                      </View>
                      <View style={styles.quantityDesc}>
                        <Text style={styles.quantity}>Full</Text>
                        <Text style={styles.quantity}>Half</Text>
                        <Text style={styles.quantity}>Qtr</Text>
                      </View>
                      <View style={styles.priceDesc}>
                        <Text style={styles.price}>10</Text>
                        <Text style={styles.price}>150</Text>
                        <Text style={styles.price}>400</Text>
                      </View>
                    </View>
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>

          <View style={styles.btn}>
            <TouchableOpacity onPress={() => navigation.navigate('')}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default CanceledOrder;
