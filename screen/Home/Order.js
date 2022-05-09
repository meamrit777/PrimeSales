import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/Order';
import {Searchbar} from 'react-native-paper';
import Icons from 'react-native-vector-icons/AntDesign';
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';

const Order = ({navigation}) => {
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
  // const [showDropDown, setShowDropDown] = useState(false);
  // const [area, setArea] = useState(' ');
  // const areaList = [
  //   {
  //     label: 'Bhanimandal',
  //     value: 'Bhanimandal',
  //   },
  //   {
  //     label: 'Bhakundole',
  //     value: 'Bhakundole',
  //   },
  //   {
  //     label: 'Dhobighat',
  //     value: 'Dhobighat',
  //   },
  //   {
  //     label: 'Kupandole',
  //     value: 'Kupandoles',
  //   },
  // ];
  // const [date, setDate] = useState('');
  // const [todate, setToDate] = useState('');
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const handleFilterModalPress = () => setFilterModalVisible(true);
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={{width: '10%'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../assets/BackBtn.png')}
                style={styles.back}></Image>
            </TouchableOpacity>
          </View>
          <View style={{width: '85%'}}>
            <Text style={styles.title}>Orders</Text>
          </View>
        </View>

        <View>
          <Searchbar
            placeholder="Search for store "
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{borderColor: '#979797', borderWidth: 0.9, marginTop: 30}}
          />
        </View>
        <View style={styles.Header}>
          <View style={styles.pendingView}>
            <Text style={styles.pendingText}>Pending</Text>
          </View>
          <View style={styles.allView}>
            <Text style={styles.allText}>All</Text>
          </View>
          <View style={{width: '10%'}}>
            <TouchableOpacity onPress={() => handleFilterModalPress()}>
              <Image
                source={require('../../assets/Filter.png')}
                style={styles.filterImage}></Image>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('OrderList')}>
          <View style={styles.topSection}>
            <View style={{width: '20%'}}>
              <Image
                source={require('../../assets/Home.png')}
                style={styles.homeImage}></Image>
            </View>
            <View style={{width: '55%'}}>
              <Text style={styles.storeTitle}>Vinayak Store Pvt. Ltd.</Text>
              <Text style={styles.StoreAddress}>Ekantakuna | Lalitpur</Text>
              <View style={styles.storeContact}>
                <View>
                  <Text style={styles.visitDate}>Last visited: 01-04-2021</Text>
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
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(' ')}>
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
                <View>
                  <Text style={styles.visitDay}>(1 day)</Text>
                </View>
              </View>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.visitNo}>12 </Text>
              <Text style={styles.visitText}>Visits</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(' ')}>
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
              <Text style={styles.visitNo}>20 </Text>
              <Text style={styles.visitText}>Visits</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(' ')}>
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
              <Text style={styles.visitNo}>44 </Text>
              <Text style={styles.visitText}>Visits</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate(' ')}>
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
              <Text style={styles.visitNo}>10</Text>
              <Text style={styles.visitText}>Visits</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={filterModalVisible}
        onRequestClose={() => {
          // Alert.alert('Modal has been closed.');
          setFilterModalVisible(!filterModalVisible);
        }}>
        <View style={styles.backgroundColor}>
          <View style={styles.filter}>
            <View style={styles.filterBackground}>
              <View style={styles.filterHeader}>
                <Text style={styles.filterText}>Filter</Text>
                <Pressable
                  onPress={() => setFilterModalVisible(!filterModalVisible)}>
                  <View
                    style={{
                      // backgroundColor: '#C7C7CC',
                      borderRadius: 1000,
                      padding: 5,
                    }}>
                    <Icons name="close" size={25} color="#000" />
                  </View>
                </Pressable>
              </View>
              <View style={styles.dropDownMenuFull}>
                <Picker
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item label="Bhanimandal" value="Bhanimandal" />
                </Picker>
                <View style={styles.heading}>
                  <Text style={styles.firstTitle}>FROM AREA</Text>
                  <Text style={styles.compulsory}>*</Text>
                </View>
              </View>
              <View style={styles.Input}>
                <View style={styles.borderStyle}>
                  <TextInput
                    style={{marginTop: 10}}
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
                    <Text style={styles.firstTitle}>FROM DATE</Text>
                    <Text style={styles.compulsory}>*</Text>
                  </View>
                </View>
                <View style={styles.borderStyle}>
                  <TextInput
                    style={{marginTop: 10}}
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
                    <Text style={styles.firstTitle}>TO DATE</Text>
                    <Text style={styles.compulsory}>*</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Filter')}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Filter</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Order;
