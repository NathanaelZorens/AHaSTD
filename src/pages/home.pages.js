import { NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, Text, Image, FlatList, Button, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import NavButt from '../navigations/navbutton';
import ProfilePages from './profile.pages';

const {HomeStyle} = Style;


function HomePages({navigation}) {
 const data = [
 {
    id: 1,
    nama: 'Random thing to do',
    gambar: 'https://media.istockphoto.com/photos/and-a-concept-yellow-question-mark-glowing-amid-black-question-marks-picture-id1305169776?b=1&k=20&m=1305169776&s=170667a&w=0&h=mpYdh2MzGN_rqxoRNlO5KWGCCq3ZktzSfp-wA0nD9no=',
    link: 'Stuff',
    desc: 'Need something to do?'
 },

 {
    id: 2,
    nama: 'Recreational',
    gambar: 'https://quizizz.com/media/resource/gs/quizizz-media/quizzes/2f31402a-2a0c-4667-a745-a4cdd1a2068a',
    link: 'Recreation',
    desc: 'Want to use your time to relieve?'
 },

 {
    id: 3,
    nama: 'Social',
    gambar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0didI0H1KKGAy0l39S6PI_XaQZUaMGgKwHilsWy4l2C3bsECshEkY7Y5FeDaTJk4xFQ4&usqp=CAU',
    link: 'Social',
    desc: 'Want to make a friend? or Have fun with friends that you have?'
 },

 {
    id: 4,
    nama: 'DIY',
    gambar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOZ-NOS3NHGuv7hlRqHk98qtyN50ipWdV5_Q&usqp=CAU',
    link: 'DIY',
    desc: 'Feel like creating something?'
 },
 
 {
    id: 5,
    nama: 'Lone Wolf',
    gambar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROxITcTLmyz0EjHAo-f7bJ7Jeiso6oMAux-bS3tI4GWy21cNOClViTJA33dbyqrl1KlgE&usqp=CAU',
    link: 'Alone',
    desc: 'Need some time alone? or just no companion?'
 },

 ];

 const ListItemNama = dataPassing => {
    return (
        <View style={HomeStyle.itemListContainers}>
            <View>
                <View style={HomeStyle.itemListGaris}>
                <Image source={{uri:  dataPassing.dataNama.gambar}} style={HomeStyle.iconImage}/>
                </View>
            </View>
            <View style={HomeStyle.itemListContent}>
                
            <Text style={HomeStyle.itemListTitle}>
                { dataPassing.dataNama.nama}
            </Text>
            
            <Text style={HomeStyle.itemListTXT}>
                { dataPassing.dataNama.desc}
            </Text>

            <TouchableOpacity
                style={HomeStyle.bodyTouchable}
                onPress={() => navigation.navigate(dataPassing.dataNama.link)}>
                <Text style={HomeStyle.bodyTXT}>GO</Text>
            </TouchableOpacity>
                
            </View>
        </View>
    );
 };

 return (
    
    <View style={HomeStyle.container}>
        <View style={HomeStyle.headerContainer}>
            <Text style={HomeStyle.headerTitle}>
                AHA-STD
            </Text>
            <Text style={HomeStyle.headerTXT}>
                Always Have Something To Do
            </Text>
            
            
    </View>

    <FlatList
        showsVerticalScrollIndicator={false}
        legacyImplementation={false}
        data={data}
        renderItem={({item}) => <ListItemNama dataNama={item} />}
        keyExtractor={item => item.id}
        style={HomeStyle.flatlist}
    />
 </View>
 );
}

  


export default HomePages;