import { NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {View, Text, Image, FlatList, Button, TouchableOpacity} from 'react-native';
import Style from '../stylessheets';
import NavButt from '../navigations/navbutton';
import ProfilePages from './profile.pages';

const {HomeStyle} = Style;


function MyPages({navigation}) {
 const data = [
 {
    id: 1,
    nama: 'Charity',
    gambar: 'https://ofhsoupkitchen.org/wp-content/uploads/2020/11/charity-begins-at-home.png',
    link: 'Charity',
    desc: 'Want to do something good to others?'
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
    nama: 'Cooking',
    gambar:'https://www.gffoodservice.com.au/content/uploads/2019/08/culinary_terms-hero-1-@2x-1.jpg',
    link: 'Cooking',
    desc: 'Hungry?'
 },

 {
    id: 4,
    nama: 'Busy Work',
    gambar:'https://www.motivation.africa/wp-content/uploads/2021/08/remote-working-in-Africa.jpg',
    link: 'Work',
    desc: 'Feeling like doing something Challenging?'
 },
 
 {
    id: 5,
    nama: 'Education',
    gambar:'https://www.roffeypark.ac.uk/wp-content/uploads/2018/06/the-7-best-books-to-improve-influencing-skills-2-scaled.jpg',
    link: 'Education',
    desc: 'Want to learn something?'
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

  


export default MyPages;