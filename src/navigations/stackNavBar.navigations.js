import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Pages from '../pages';
import {faHome, faUser, faChild} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import MyPages from '../pages/myself';
const NavStack = createBottomTabNavigator();




function StackNavBar() {
 return (
<NavStack.Navigator>
    <NavStack.Screen
        name="Home"
        component={Pages.HomePages}
        options={{
        headerTitle: 'Home',
        tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faHome} size={20} color={color} />;
        },
        }}
    />

<NavStack.Screen
        name="Self Improvement"
        component={MyPages}
        options={{
        headerTitle: 'Self Improvement',
        tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faChild} size={20} color={color} />;
        },
        }}
    />

    <NavStack.Screen
    name="About"
    component={Pages.ProfilePages}
    options={{
        headerTitle: 'About',
        tabBarIcon: ({color}) => {
            return <FontAwesomeIcon icon={faUser} size={20} color={color} />;
        },
    }}
    />
 </NavStack.Navigator>
 );
}
export default StackNavBar;