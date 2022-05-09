import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../style/CreateNewShop';
import {Provider, Surface} from 'react-native-paper';
import {Checkbox} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
const CreateNewShop = ({navigation}) => {
  // const [shop, setShop] = useState('');
  // const [owner, setOwner] = useState('');
  // const [showDropDown, setShowDropDown] = useState(false);
  // const [outlet, setOutlet] = useState('');
  // const [showCategory, setShowCategory] = useState(false);
  // const [category, setCategory] = useState('');
  // const [showProvience, setShowProvience] = useState(false);
  // const [provience, setProvience] = useState('');
  // const [showArea, setShowArea] = useState('false');
  // const [area, setArea] = React.useState('');
  // const [address, setAddress] = React.useState('');
  // const [contact, setContact] = React.useState('');
  const [checked, setChecked] = React.useState(false);
  // const [bill, setBill] = React.useState('');
  // const [vat, setVat] = React.useState('');
  const [selectedLanguage, setSelectedLanguage] = useState();

  // const outletList = [
  //   {
  //     label: 'Retail',
  //     value: 'Retail',
  //   },
  // ];
  // const categoryList = [
  //   {
  //     label: 'A',
  //     value: 'A',
  //   },
  //   {
  //     label: 'B',
  //     value: 'B',
  //   },
  //   {
  //     label: 'C',
  //     value: 'C',
  //   },
  // ];
  // const provienceList = [
  //   {
  //     label: 'Provience 1',
  //     value: 'Provience 1',
  //   },
  //   {
  //     label: 'Provience 2',
  //     value: 'Provience 2',
  //   },
  //   {
  //     label: 'Provience 3',
  //     value: 'Provience 3',
  //   },
  //   {
  //     label: 'Provience 4',
  //     value: 'Provience 4',
  //   },
  //   {
  //     label: 'Provience 5',
  //     value: 'Provience 5',
  //   },
  //   {
  //     label: 'Provience 6',
  //     value: 'Provience 6',
  //   },
  //   {
  //     label: 'Provience 7',
  //     value: 'Provience 7',
  //   },
  // ];
  // const areaList = [
  //   {
  //     label: 'Bhanimandal',
  //     value: 'Bhanimandal',
  //   },
  // ];
  return (
    <Provider>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image
              source={require('../../assets/menu.png')}
              style={styles.headerImage}></Image>
            <Image source={require('../../assets/companyHeader.png')}></Image>
            <Image
              source={require('../../assets/Notification.png')}
              style={styles.headerImage}></Image>
          </View>
          <View>
            <Text style={styles.title}>Create New Shop</Text>
          </View>
          <View style={styles.borderStyle}>
            <TextInput style={styles.textInputStyle}></TextInput>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>SHOP NAME</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <View style={styles.borderStyle}>
            <TextInput style={styles.textInputStyle}></TextInput>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>OWNER</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <View style={styles.dropDown}>
            <View style={styles.dropDownMenu}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Retail" value="Retail" />
              </Picker>
              <View style={styles.heading}>
                <Text style={styles.firstTitle}>OUTLET TYPE</Text>
                <Text style={styles.compulsory}>*</Text>
              </View>
            </View>
            <View style={styles.dropDownMenu}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="A" value="A" />
                <Picker.Item label="B" value="B" />
                <Picker.Item label="C" value="C" />
              </Picker>
              <View style={styles.heading}>
                <Text style={styles.firstTitle}>CATEGORY</Text>
                <Text style={styles.compulsory}>*</Text>
              </View>
            </View>
          </View>
          <View style={styles.dropDownMenuFull}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Provience 1" value="Provience 1" />
              <Picker.Item label="Provience 2" value="Provience 2" />
              <Picker.Item label="Provience 3" value="Provience 3" />
            </Picker>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>PROVIENCE</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <View style={styles.dropDownMenuFull}>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Bhanimandal" value="Bhanimandal" />
              <Picker.Item label="Bhanimandal" value="Bhanimandal" />
            </Picker>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>AREA</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>

          <View style={styles.borderStyle}>
            <TextInput style={styles.textInputStyle}></TextInput>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>ADDRESS</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>

          <View style={styles.borderStyle}>
            <TextInput style={styles.textInputStyle} keyboardType="numeric" />

            <View style={styles.heading}>
              <Text style={styles.firstTitle}>CONTACT NO.</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <View style={styles.checkbox}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#00CFE8"
            />
            <Text style={styles.checkBox}>Same as shop name</Text>
          </View>
          <View style={styles.borderStyle}>
            <TextInput style={styles.textInputStyle}></TextInput>
            <View style={styles.heading}>
              <Text style={styles.firstTitle}>BILLING NAME</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>
          <View style={styles.borderStyle}>
            <TextInput style={styles.textInputStyle} keyboardType="numeric" />

            <View style={styles.heading}>
              <Text style={styles.firstTitle}>VAT/ PAN NO.</Text>
              <Text style={styles.compulsory}>*</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('Order')}>
            <View
              style={{
                width: '100%',
                height: 60,
                backgroundColor: '#00CFE8',
                marginTop: 20,
                marginBottom: 20,
                borderRadius: 10,
              }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '700',
                  color: '#fff',
                  textAlign: 'center',
                  marginTop: 14,
                }}>
                Continue
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Provider>
  );
};

export default CreateNewShop;
