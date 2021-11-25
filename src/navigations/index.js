import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StackNavBar from './stackNavBar.navigations';
import Pages from '../pages';
import ProfilePages from '../pages/profile.pages';
import stuff from '../pages/stuff';
import recreation from '../pages/recreation';
import social from '../pages/social';
import diy from '../pages/diy';
import alone from '../pages/alone';
const Stack = createStackNavigator();
class Navigator extends Component {
 constructor() {
 super();
 this.state = {};
 }
 render() {
 return (
 <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
            name="Nav"
            component={StackNavBar}
            options={{
                headerStyle: {
                    shadowOpacity: 0,
                    elevation: 0,
                },
                headerTitle: null,
                headerShown: null,
            }}
        />
        <Stack.Screen name="Profile" component={ProfilePages} />
        <Stack.Screen name="Stuff" component={stuff} />
        <Stack.Screen name="Recreation" component={recreation} />
        <Stack.Screen name="Social" component={social} />
        <Stack.Screen name="DIY" component={diy} />
        <Stack.Screen name="Alone" component={alone} />
    </Stack.Navigator>



 </NavigationContainer>
 );
 }
}
export default Navigator;