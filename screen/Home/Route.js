import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/Route';
import {Searchbar} from 'react-native-paper';

import {Provider, Surface} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Route = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // const [showDropDown, setShowDropDown] = useState(false);
  // const [route, setRoute] = useState('');
  // const routeList = [
  //   {
  //     label: 'Hattisar - Bhanimandal',
  //     value: 'Hattisar - Bhanimandal',
  //   },
  //   {
  //     label: 'Hattisar - Bhanimandal',
  //     value: 'Hattisar - Bhanimandal',
  //   },
  // ];
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <View style={{width:"15%"}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={require('../../assets/BackBtn.png')} style={styles.back}></Image>
            </TouchableOpacity>
            </View>
           
            <View style={{width:"85%"}}>
            <Text style={styles.title}>Route</Text>
          </View>
          </View>
         
          <View style={styles.routeBox}>
            <View style={{width: '20%'}}>
              <Image
                source={require('../../assets/PP1.png')}
                style={styles.profile}></Image>
            </View>
            <View style={{width: '40%'}}>
              <Text style={styles.name}>RUPESH MALLA</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/image1.png')}></Image>
                <Text style={styles.position}>SALES OFFICER</Text>
              </View>
            </View>
            <View style={{width: '30%', position: 'relative'}}>
              <View style={styles.date}>
                <Text style={styles.dateText}>08 Chaitra, 2078</Text>
              </View>
            </View>
          </View>
          <View>
            <Searchbar
              placeholder="Search for store "
              onChangeText={onChangeSearch}
              value={searchQuery}
              style={styles.Searchbar}
            />
          </View>
         
            <View style={styles.borderStyle}>
              <TextInput style={{marginTop: 10}}></TextInput>
              <View style={styles.heading}>
                <Text style={styles.firstTitle}>SELECT ROUTE</Text>
                <Text style={styles.compulsory}>*</Text>
              </View>
            </View>
            <View style={styles.borderStyleSec}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Sunday" value="Sunday" />
                <Picker.Item label="Monday" value="Monday" />
                <Picker.Item label="Tuesday" value="Tuesday" />
                <Picker.Item label="Wednesday" value="Wednesday" />
                <Picker.Item label="Thursday" value="Thursday" />
                <Picker.Item label="Friday" value="Friday" />
                <Picker.Item label="Saturday" value="Saturday" />
              </Picker>
            </View>
         
          <View style={styles.dropDownMenuFull}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item
                label="Hattisar - Bhanimandal"
                value="Hattisar - Bhanimandal"
              />
            </Picker>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>ROUTE AREA</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
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
                    <Text style={styles.visitDate}>
                      Last visited: 01-04-2078
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{width: '20%'}}>
                <Text style={styles.visitNo}>56 </Text>
                <Text style={styles.visitText}>Visits</Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.Section}>
            <View style={{width: '20%'}}>
              <Image
                source={require('../../assets/Home.png')}
                style={styles.homeImage}></Image>
            </View>
            <View style={{width: '55%'}}>
              <Text style={styles.storeTitle}>Bhanimandal Mart </Text>
              <Text style={styles.storeAdd}>Bhanimandal | Lalitpur</Text>
              <View style={styles.storeContact}>
                <View>
                  <Text style={styles.visitDate}>Last visited: 01-04-2078</Text>
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
              <Text style={styles.storeTitle}>Sanepa Mart </Text>
              <Text style={styles.storeAdd}>Sanepa | Lalitpur</Text>
              <View style={styles.storeContact}>
                <View>
                  <Text style={styles.visitDate}>Last visited: 01-04-2078</Text>
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
              <Text style={styles.storeTitle}>Satdobato Mart </Text>
              <Text style={styles.storeAdd}>Satdobato | Lalitpur</Text>
              <View style={styles.storeContact}>
                <View>
                  <Text style={styles.visitDate}>Last visited: 01-04-2078</Text>
                </View>
              </View>
            </View>
            <View style={{width: '20%'}}>
              <Text style={styles.visitNo}>12 </Text>
              <Text style={styles.visitText}>Visits</Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('')}>
            <View style={styles.ConfirmBtn}>
              <Text style={styles.Confirm}>Confirm</Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default Route;
