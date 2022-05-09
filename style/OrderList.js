import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  title: {fontSize: 24, fontWeight: '500', color: '#000', marginTop: 0},
  topSection: {
    width: '100%',
    height: 95,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
 
  },
  homeImage: {width: 70, height: 80,alignSelf: 'center'},
  storeTitle: {
    fontSize: 18,
    color: '#000',
    fontWeight: '400',
    textAlign: 'left',
  },
  StoreAdd: {fontSize: 14, color: '#979797', fontWeight: '400'},
  storeContact: {flexDirection: 'row', justifyContent: 'space-between'},
  visitDate: {fontSize: 12, fontWeight: '400', color: '#00CFE8'},
  visitDay: {fontSize: 12, fontWeight: '400', color: '#FF0000'},
  visitNo: {fontSize: 40, fontWeight: '400', color: '#00CFE8',textAlign:"center"},
  visitText: {
    fontSize: 12,
    fontWeight: '400',
    color: '#00CFE8',
    textAlign:"center"
    
  },

  boxContainer: {
    width: '100%',
    height: 110,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.25)',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 3,
    flexDirection: 'row',
    marginTop: 15,
  },
  image: {width: '20%', padding: 8,alignSelf:"center"},
  productDesc: {width: '80%', padding: 20},
  productTitle: {fontSize: 18, fontWeight: '400', color: '#000'},
  quantityDesc: {flexDirection: 'row', justifyContent: 'space-between'},
  quantity: {color: '#00CFE8', fontSize: 16, fontWeight: '400'},
  priceDesc: {flexDirection: 'row', justifyContent: 'space-between'},
  price: {color: '#000', fontSize: 20, fontWeight: '400'},
  remarks: {
    width: '90%',
    height: 55,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 4,
    borderColor: '#A9A7A7',
    borderWidth: 0.8,
    padding: 6,marginTop:15
  },
  Btn:{
    width: '40%',
    height: 40,
    backgroundColor: '#00CFE8',
    borderRadius: 10,
  },
  btnText:{
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  line:{ borderBottomWidth:1,
    borderColor:'#BABFC7',paddingBottom:9},
    productDetails:{flexDirection:"row",justifyContent:"space-between"},
    box:{color: '#A9A7A7', fontSize: 12, fontWeight: '600'},
    buttons:{padding: 30,flexDirection:"row",justifyContent:"space-between"},
    remarkTextInput:{width:'100%',marginBottom:5},
    back:{width:38,height:38},
    header:{flexDirection: 'row', justifyContent: 'space-between',alignItems:"center"}

});
