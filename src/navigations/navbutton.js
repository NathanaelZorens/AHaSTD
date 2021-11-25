import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfilePages from '../pages/profile.pages';

const Stack = createNativeStackNavigator();
function NavButt(){
return(
<NavigationContainer>
<Stack.Navigator>
    <Stack.Screen name="Profile" component={ProfilePages} />
</Stack.Navigator>
</NavigationContainer>
);
}

export default NavButt;
