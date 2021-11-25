import {StyleSheet} from 'react-native';
export default StyleSheet.create({
 container: {
 flex: 1,
 },
 headerContainer: {
   backgroundColor: 'lightblue',
   borderBottomLeftRadius: 20,
   borderBottomRightRadius: 15,
   alignItems: 'center',
   paddingBottom: 20,
 },
 headerImage: {
 height: 90,
 width: 90,
 },

 headerTXT: {
   color: 'purple',
   fontWeight: 'bold',
 },
 
 headerTitle: {
   color: 'black',
   fontWeight: 'bold',
   fontSize: 30,
   
 },

 flatlist: {
 flex: 1,
 marginHorizontal: 10,
 },
 itemListContainerGanjil: {
 height: 100,
 backgroundColor: '#1aa',
 marginVertical: 5,
 borderRadius: 10,
 flexDirection: 'row',
 alignItems: 'center',
 paddingHorizontal: 20,
 },
 itemListContainerGenap: {
 height: 100,
 backgroundColor: '#1a0',
 marginVertical: 5,
 borderRadius: 10,
 flexDirection: 'row',
 alignItems: 'center',
 paddingHorizontal: 20,
 },

 itemListContainers: {
    height: 100,
    backgroundColor: 'lightgrey',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    
},

 itemListContent: {
   marginLeft: 10,
   
 },

 itemListGaris: {
 backgroundColor: '#a11',
 width:50,
 height: '80%',
 },
 itemListTitle: {
   color: 'navy',
   marginVertical: 2,
   fontWeight: 'bold',
   fontSize: 17,
 },

 itemListTXT: {
   color: 'darkred',
   marginVertical: 2,
   
   fontSize: 10,
 },

 bodyTouchable: {
  
  width: 100,
  alignItems:'center',
  backgroundColor: 'yellowgreen',
  paddingHorizontal: 10,
  paddingVertical: 5,
  borderRadius: 5,
  margin: 5,
  },

bodyTXT:{
  fontWeight:'bold'
},  

iconImage: {
  height: 70,
  width: 50,
  //borderRadius: 60,
  marginVertical: 10,
  },

});