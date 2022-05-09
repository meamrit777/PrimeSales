import {View, Text, ScrollView, TouchableOpacity, Image,TextInput} from 'react-native';
import React from 'react';
import styles from '../../style/FloorUpdate';

const FloorUpdate = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.head}>
          <View style={{width:"15%"}}>
          <TouchableOpacity onPress={() => navigation.navigate('Floor')}>
            <Image source={require('../../assets/BackBtn.png')}></Image>
          </TouchableOpacity>
          </View>
         
          <View style={{width:"85%"}}>
          <Text style={styles.title}>Floor</Text>
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
                  <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
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
                <View style={styles.quantityDesc}>
                  <Text style={styles.quantity}>Full</Text>
                  <Text style={styles.quantity}>Half</Text>
                  <Text style={styles.quantity}>Qtr</Text>
                </View>
                <View style={styles.priceDesc}>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.image}>
                <Image source={require('../../assets/Emperor.png')}></Image>
              </View>
              <View style={styles.productDesc}>
                <View>
                  <Text style={styles.productTitle}>Emperor</Text>
                </View>
                <View style={styles.quantityDesc}>
                  <Text style={styles.quantity}>Full</Text>
                  <Text style={styles.quantity}>Half</Text>
                  <Text style={styles.quantity}>Qtr</Text>
                </View>
                <View style={styles.priceDesc}>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                </View>
              </View>
            </View>

            <View style={styles.boxContainer}>
              <View style={styles.image}>
                <Image source={require('../../assets/highlander.png')}></Image>
              </View>
              <View style={styles.productDesc}>
                <View>
                  <Text style={styles.productTitle}>Emperor</Text>
                </View>
                <View style={styles.quantityDesc}>
                  <Text style={styles.quantity}>Full</Text>
                  <Text style={styles.quantity}>Half</Text>
                  <Text style={styles.quantity}>Qtr</Text>
                </View>
                <View style={styles.priceDesc}>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
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
                <View style={styles.quantityDesc}>
                  <Text style={styles.quantity}>Full</Text>
                  <Text style={styles.quantity}>Half</Text>
                  <Text style={styles.quantity}>Qtr</Text>
                </View>
                <View style={styles.priceDesc}>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                  <TextInput
                    placeholder="_"
                    style={{marginTop: -10, color: '#000', textAlign: 'center'}}
                    maxLength={5}
                    keyboardType="numeric"></TextInput>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={styles.remarks}>
          <Text style={styles.remarkText}>Remarks *</Text>
          <TextInput style={{width:"100%",marginBottom:5}}></TextInput>
        </View>

        <View style={styles.Btn}>
          <TouchableOpacity onPress={() => navigation.navigate('PlaceOrder')}>
            <Text style={styles.btnText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FloorUpdate;
