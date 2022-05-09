import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/PlaceOrder';
import {Provider, Surface} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const Floor = ({navigation}) => {
  // const [showDropDown, setShowDropDown] = useState(false);
  // const [select, setSelect] = useState('');
  // const selectList = [
  //   {
  //     label: 'Physically Ordered',
  //     value: 'Physically Ordered',
  //   },
  //   {
  //     label: 'By Phone',
  //     value: 'By Phone',
  //   },
  // ];
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={styles.header}>
            <View style={{width: '15%'}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FloorUpdate')}>
                <Image source={require('../../assets/BackBtn.png')} style={{width:38,height:38}}></Image>
              </TouchableOpacity>
            </View>

            <View style={{width: '85%'}}>
              <Text style={styles.title}>Place Order</Text>
            </View>
          </View>

          <View style={styles.line}>
            <View style={styles.topSection}>
              <View style={{width: '20%'}}>
                <Image
                  source={require('../../assets/Home.png')}
                  style={styles.homeImage}></Image>
              </View>
              <View style={{width: '55%'}}>
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

          <ScrollView>
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
                  <Image source={require('../../assets/24Carat.png')}></Image>
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
                  <Image source={require('../../assets/virgin.png')}></Image>
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
            </View>
          </ScrollView>
          <View style={styles.remarks}>
            <Text style={styles.remarkText}>Remarks *</Text>
          </View>
          <View style={styles.dropDownMenuFull}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                label="Physically Ordered"
                value="Physically Ordered"
              />
              <Picker.Item label="By Phone" value="By Phone" />
            </Picker>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>SELECT</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <TouchableOpacity>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Order</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default Floor;
