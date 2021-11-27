import React from 'react';
import {View, Text, Alert, StyleSheet, Image, FlatList, Button} from 'react-native';
import axios from 'axios';



function free() {
    const [data, setData] = React.useState('');
    const [count, setCount] = React.useState(1);
    
    
    React.useEffect(() => {
        async function fetchData() {
            const request = await axios
                .get('http://www.boredapi.com/api/activity?price=0.0')
                .then(res => setData(res.data))
                .catch(e => Alert.alert('Gagal!', e));
            return request;
        }
        fetchData();
 }, [count]);

    const psb = () => {

        return (data.accessibility);
    }

    const harg = () => {
        return (data.price);
    }
    
    return (
        <View style={styles.container}>

        <Image source={{uri: 'https://media.istockphoto.com/photos/hand-open-empty-an-wallet-picture-id971197892?k=20&m=971197892&s=612x612&w=0&h=PJ7CykMmuco5ce4YvVEujTfjryG-ZdcjazONjczsROc='}} style={styles.headerImage}/>
        
        <Text style={styles.title}>Here's a suggestion:</Text>
        

        <Text style={styles.result}> {data.activity} </Text>

        <View>
        <Text style={styles.desc}>Type:  </Text>
            <Text style={styles.descDetail}> {data.type} </Text>

        <Text style={styles.desc}>Need: </Text>
            <Text style={styles.descDetail}>{data.participants} people</Text> 

        <Text style={styles.desc}>Cost level: </Text>
            <Text style={styles.descDetail}>{harg()*10===0 ?'No, totally FREE' :harg()*10+' out of 10'}</Text>

        <Text style={styles.desc}>How hard to get/do: </Text>
            <Text style={styles.descDetail}>{psb()*10} out of 10</Text>
        </View>
        </View>
    );
}

//StyleSheet=======================================================
const styles = StyleSheet.create({
    container: {
        top: 25,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 35,
        paddingBottom: 35
    },

    title: {
        color:'green',
        fontSize:20,
        fontWeight:'bold',
        paddingBottom: 10,
        paddingTop: 30
    },

    result: {
        color:'orange',
        fontSize:22,
        fontWeight:'bold',
        paddingBottom: 15,
        justifyContent: 'center',
        textAlign:'center'
    },

    desc: {
        color:'purple',
        fontSize:20,
        fontWeight:'bold',
        
    },

    descDetail: {
        color:'blue',
        fontSize:18,
        fontWeight:'bold',
        paddingHorizontal:30,
        paddingBottom:5
    },

    headerImage: {
        height: 120,
        width: 120,
        borderRadius: 60,
        marginVertical: 10
        
        },

});



export default free;