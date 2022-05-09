import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {backgroundColor: '#fff', flex: 1, padding: 20},
  image: {position: 'relative', marginTop: 50},
  profile: {borderRadius: 1000, alignSelf: 'center'},
  ellipse: {position: 'absolute', width: 30, height: 30, bottom:0,left:180},
  hello: {
    textAlign: 'center',
    marginTop: 10,
    fontWeight: '400',
    fontSize: 14,
    color: '#000',
  },
  name: {
    color: '#000',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    marginTop: 5,
    marginBottom:5
  },
  button: {
    width: '100%',
    height: 44,
    marginTop: 15,
    borderColor: '#979797',
    borderRadius: 10,
    shadowColor: '#000',
    elevation: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  Text:{fontSize:18,fontWeight:"500",color:"#000"},
  text:{fontSize:12,fontWeight:"500",marginTop:15,color:"#979797"}
});
