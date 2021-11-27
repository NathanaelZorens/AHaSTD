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
import myself from '../pages/myself';
import free from '../pages/free';
import charity from '../pages/charity';
import cooking from '../pages/cooking';
import busy from '../pages/busy';
import education from '../pages/education';
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
        <Stack.Screen name="Self" component={myself} />
        <Stack.Screen name="Stuff" component={stuff} />
        <Stack.Screen name="Recreation" component={recreation} />
        <Stack.Screen name="Social" component={social} />
        <Stack.Screen name="DIY" component={diy} />
        <Stack.Screen name="Alone" component={alone} />

        <Stack.Screen name="Free" component={free} />
        <Stack.Screen name="Charity" component={charity} />
        <Stack.Screen name="Cooking" component={cooking} />
        <Stack.Screen name="Work" component={busy} />
        <Stack.Screen name="Education" component={education} />
    </Stack.Navigator>



 </NavigationContainer>
 );
 }
}
export default Navigator;