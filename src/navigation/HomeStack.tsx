import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {HomeScreen} from "../screens/HomeScreen";

const Stack = createStackNavigator();

export const HomeStack = () => {

    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
};

