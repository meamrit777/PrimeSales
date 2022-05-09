import React, {useState, createRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import styles from '../../style/login';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTogglePasswordVisibility} from './useTogglePasswordVisibility';
// import Loader from './Loader';
const LoginScreen = ({navigation}) => {
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [errortext, setErrortext] = useState('');
  // const [hidePass, setHidePass] = useState(true);
  // const passwordInputRef = createRef();
  const [name, setName]=useState("chanda Shrestha");
  const {passwordVisibility, rightIcon, handlePasswordVisibility} =
    useTogglePasswordVisibility();
  const [password, setPassword] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then(response => response.json())
      .then(responseJson => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status === 'success') {
          AsyncStorage.setItem('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace('DrawerNavigationRoutes');
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  const valueChange  = () => {
   
    // if(name=="chanda Shrestha"){
      setName(name=="chanda Shrestha"?"Ananta Shrestha":"chanda Shrestha");
    // }
    // else{
    //   setName("chanda Shrestha")rr
    // }
  }
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  return (
    <View style={styles.mainBody}>
      {/* <Loader loading={loading} /> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <KeyboardAvoidingView enabled>
            <View>
              <Text style={styles.title}>Welcome to PS 360</Text>
            </View>
            <View>
              <Text style={styles.title}>{name}</Text>
            </View>
            <View>
              <Text style={styles.subtitle}>
                Please provide us with few more details
              </Text>
            </View>

            {/* <TextInput
          email={email}
          style={styles.input}
          inputStyle={styles.inputStyle}
          labelStyle={styles.labelStyle}
          label="EMAIL ID"
          onChangeText={text => {
            setEmail(text);
          }}
        /> */}
            <View style={styles.borderStyle}>
              <TextInput style={styles.inputTextStyle}></TextInput>
              <View style={styles.heading}>
                <Text style={styles.firstTitle}>EMAIL ID</Text>
              </View>
            </View>
            <View style={styles.borderStyle}>
              <TextInput
                name="password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="newPassword"
                secureTextEntry={passwordVisibility}
                value={password}
                enablesReturnKeyAutomatically
                onChangeText={text => setPassword(text)}
                style={{width:'80%',marginTop:10}}
              />
              <Pressable onPress={handlePasswordVisibility}>
                <Icon name={rightIcon} size={18} color="#232323" />
              </Pressable>
              <View style={styles.heading}>
                <Text style={styles.firstTitle}>PASSWORD</Text>
              </View>
            </View>

            <TouchableOpacity  
              style={styles.buttonStyle}
              activeOpacity={0.5}
              // onPress={handleSubmitPress}
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.buttonTextStyle}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity  
              style={styles.buttonStyle}
              activeOpacity={0.5}
              // onPress={handleSubmitPress}
              onPress={valueChange}>
              <Text style={styles.buttonTextStyle}>change</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default LoginScreen;
