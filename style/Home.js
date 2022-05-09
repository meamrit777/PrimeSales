import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom:15
  },
  headerImage: {marginTop: 10},
  salesOfficer: {
    width: '100%',
    height: 187,
    borderRadius: 23,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 17,
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
    textAlign: 'center',
  },
  numberStyle: {
    fontSize: 35,
    fontWeight: '400',
    color: '#00CFE8',
    textAlign: 'center',
  },
  loadingImage: {alignSelf: 'center', marginTop: 8},
  leaderShip: {
    width: '100%',
    height: 165,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 5,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    padding: 10,
  },
  leaderShipDesc: {
    width: '100%',
    height: 25,
    backgroundColor: '#00CFE8',
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor:"#FFD700"
  },
  leaderShipDescI: {
    width: '100%',
    height: 25,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"#FFD700"
  },
  leaderShipDescIII: {
    width: '100%',
    height: 25,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"#CD7F32"
  },
  leaderShipDescII: {
    width: '100%',
    height: 25,
    alignSelf: 'center',
    marginTop: 10,
    borderRadius: 43,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor:"#C0C0C0"
  },
  leaderShipText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#fff',
    marginTop: 2,
   
  },
  menuSection: {
    marginTop: 30,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuView: {
    width: '30%',
    height: 94,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    shadowColor: '#000',
    elevation: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 0.5,
  },
  menuImage: {width: 51, height: 51, alignSelf: 'center', marginTop: 16},
  menuText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#82868B',
    marginTop: 5,
    textAlign: 'center',
  },
  order: {marginTop: 22, alignSelf: 'center'},
  dispatchSection: {
    width: '100%',
    height: 150,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    shadowColor: '#000',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 27,
    borderWidth: 0.6,
    borderRadius: 10,
    paddingLeft: 21,
    paddingRight: 21,
  },
  supplierName:{width: '60%',marginLeft:15},
  latestSection: {
    width: '100%',
    height: 150,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    shadowColor: '#000',
    backgroundColor: '#fff',
    elevation: 5,
    marginTop: 27,
    borderWidth: 0.6,
    borderRadius: 10,
    paddingLeft: 21,
    paddingRight: 21,
  },
 
 
  slide1: {
    
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e56464'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe900'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#008d4c'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});
