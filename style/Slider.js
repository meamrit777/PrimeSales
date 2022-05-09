import {StyleSheet} from 'react-native';
export default StyleSheet.create({ 
  salesOfficer: {
    width: '100%',
    height: 187,
    borderRadius: 23,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 17,
    borderWidth:1
  },
   salesHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  Image: {width: 50, height: 50, borderRadius: 1000},
  textStyle: {color: '#82868B', fontSize: 14, fontWeight: '400', marginTop: 7},
  image: {width: 20, height: 20},
  salesText: {fontSize: 11, color: '#FF9F43'},
  rightView: {
    width: '102%',
    backgroundColor: '#00CFE8',
    borderTopLeftRadius: 11,
    borderBottomLeftRadius: 11,
    height: 21,
    marginTop: 10,
  },
  rightViewText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '400',
    color: '#fff',
    marginTop: 1,
  },
  desc: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Desc: {width: '25%'},
  descStyle: {
    fontSize: 12,
    color: '#878787',
    fontWeight: '700',
    marginTop: 10,
    
  },
  numberStyle: {
    fontSize: 35,
    fontWeight: '400',
    color: '#00CFE8',
    textAlign: 'center',
  },})