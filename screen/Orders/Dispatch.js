import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/Dispatch';
import {Provider, Surface} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';
import {Picker} from '@react-native-picker/picker';

const Dispatch = ({navigation}) => {
  const currDate = moment().format('YYYY/MM/DD');
  const today = new Date();
  const [showCalendar, setShowCalendar] = useState(false);
  const [dob, setDob] = useState('');
  const [date, setDate] = useState(new Date(today));
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowCalendar(Platform.OS === 'ios');
    setDate(currentDate);
    // console.log(currentDate);
    var dateSelected = currentDate
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/');
    console.log('skjcsklcjdklcjklscjdkcjdlkcjdlkc', typeof dateSelected);
    setDob(dateSelected);
  };

  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={{width:"15%"}}>
            <TouchableOpacity onPress={() => navigation.navigate('OrderList')}>
              <Image source={require('../../assets/BackBtn.png')} style={styles.back}></Image>
            </TouchableOpacity>
            </View>
            <View style={{width:'85%'}}>
            <Text style={styles.title}>Dispatch</Text>
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
                  <View>
                    <Text style={styles.visitDay}>(3 days)</Text>
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
          <View style={{paddingTop: 20}}>
            <View>
              <View style={styles.dropDownMenuFull}>
                <Picker
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="R Store" value="R Store" />
                </Picker>
                <View style={styles.heading}>
                  <Text style={styles.firstTitle}>DEALER NAME</Text>
                  <Text style={styles.compulsory}>*</Text>
                </View>
              </View>
              <View
                style={{justifyContent: 'space-between', flexDirection: 'row'}}>
                <View style={styles.borderStyle}>
                  <TextInput style={{marginTop:10}}
                    placeholder={currDate}
                    defaultValue={date}
                    value={dob}
                    onChangeText={dob => {
                      setDob(dob);
                    }}
                    onFocus={() => setShowCalendar(true)}></TextInput>
                  <TouchableOpacity>
                    <Icon
                      name="calendar"
                      size={25}
                      color={'grey'}
                      style={{
                        position: 'absolute',
                        alignSelf: 'flex-end',
                        marginTop: -38,
                        paddingRight: 20,
                      }}
                    />
                  </TouchableOpacity>
                  {showCalendar ? (
                    <DateTimePicker
                      singleFileID="dateTimePicker"
                      value={date}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      onChange={onChangeDate}
                    />
                  ) : null}
                  <View style={styles.heading}>
                    <Text style={styles.firstTitle}>DISPATCH DATE</Text>
                    <Text style={styles.compulsory}>*</Text>
                  </View>
                </View>
                <View style={styles.borderStyle}>
                  <TextInput style={{width:"100%",marginTop:10}}></TextInput>
                  <View style={styles.heading}>
                    <Text style={styles.firstTitle}>REMARKS</Text>
                    <Text style={styles.compulsory}>*</Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity>
                <View style={styles.uploadBtn}>
                  <Text style={styles.upload}>Upload</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.editCon}>
                <View style={styles.editSec}>
                  <Text style={styles.edit}>Edit</Text>
                  <Image source={require('../../assets/Edit.png')}></Image>
                </View>
                <View style={{padding: 20}}>
                  <View>
                  <ScrollView  nestedScrollEnabled={true} >
             
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
                          source={require('../../assets/highlander.png')}></Image>
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

                  </ScrollView>
                  </View>
                </View>
              </View>
              <TouchableOpacity>
                <View style={styles.uploadBtn}>
                  <Text style={styles.upload}>Submit</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default Dispatch;
