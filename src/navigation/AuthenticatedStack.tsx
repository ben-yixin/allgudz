import React from 'react';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {HomeStack} from "./HomeStack";
import {Ionicons} from "@expo/vector-icons";

export const AuthenticatedStack = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={() => ({
            tabBarStyle: {
                borderTopColor: 'white'
            }
        })}>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={() => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return focused ? (
                            <Ionicons name="home" size={24} color="black"/>
                        ) : (
                            <Ionicons name="home-outline" size={24} color="black"/>
                        );
                    },
                })}
            />
            <Tab.Screen
                name="Messages"
                component={HomeStack}
                options={() => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return focused ? (
                            <Ionicons name="chatbubbles-sharp" size={24} color="black" />
                        ) : (
                            <Ionicons name="chatbubbles-outline" size={24} color="black" />
                        );
                    },
                })}
            />
            <Tab.Screen
                name="Profile"
                component={HomeStack}
                options={() => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarIcon: ({focused}) => {
                        return focused ? (
                            <Ionicons name="person-circle" size={24} color="black"/>
                        ) : (
                            <Ionicons name="person-circle-outline" size={24} color="black"/>
                        );
                    },
                })}
            />
        </Tab.Navigator>
    );
};

