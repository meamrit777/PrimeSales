import {StyleSheet} from 'react-native';
export default StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: '#fff',
        padding:27
      },
   
      buttonStyle: {
        backgroundColor: '#00CFE8',
        borderWidth: 0,
        color: '#FFFFFF',
        height: 60,
        alignItems: 'center',
        borderRadius: 10,
        marginTop:156
        
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight:"700",
        marginTop:13
      },
      inputStyle: {
        flex: 1,
        color: 'white',
        backgroundColor:"#fff",
        height:45,
        marginTop:20
    
    
       
      },
      input: {
        height: 45,
        paddingHorizontal: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        marginTop:20
      },
      inputStyle: { fontSize: 14 },
      labelStyle: {
        fontSize: 12,
        position: 'absolute',
        top: 0,
        backgroundColor: 'white',
        paddingHorizontal: 4,
        marginLeft: -4,
      },
   title:   {fontSize:24,fontWeight:"700",color:"#000",marginTop:117},
   subTitle:{fontSize:14,fontWeight:"400",marginTop:8,color:"#000"},
   borderStyle: {
    width: '100%',
    borderWidth: 1,
    height: 50,
    marginTop: 15,
    paddingLeft: 10,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    elevation: 3,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    paddingRight:5
  },
  heading:{position:"absolute",left:10,top:0,},
  firstTitle:{fontSize:12,fontWeight:"600"},compulsory:{color:"#EA5455"},
  inputTextStyle:{marginTop:10,width:'100%'}
})