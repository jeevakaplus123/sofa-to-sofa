import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "./features/Home"
import Info from "./features/Info"
import ContactDetails from "./features/ContactDetails"

const Stack = createStackNavigator()

const Route = () => {
    return (
        <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options={{ headerMode: 'none', headerShown: false }} />
            <Stack.Screen name="Info" component={Info} options={{ headerTransparent: true, title: '', headerTintColor: '#fff' }} />
            <Stack.Screen name="ContactDetails" component={ContactDetails} options={{ headerTransparent: true, title: '', headerTintColor: '#fff'}} />
        </Stack.Navigator>   
        </NavigationContainer>
    )
}

export default Route
