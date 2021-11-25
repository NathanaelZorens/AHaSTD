import React from 'react';
import {View, Text, Image, Alert, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import axios from 'axios';

const {ProfileStyle} = Style;

function ProfilePages() {
   


 return (
    <View style={ProfileStyle.container}>
        <View style={ProfileStyle.headerContainer}>
        <Image source={{uri: 'https://cdn.pixabay.com/photo/2017/02/05/18/54/hare-2040912_1280.png'}} style={ProfileStyle.headerImage}/>
            <Text style={ProfileStyle.headerTXT}>
                Made by Nathanael Zorens
            </Text>
            <Text style={ProfileStyle.headerTXTDesc}>:)</Text>
        </View>
        
 </View>
 );
}


export default ProfilePages;
