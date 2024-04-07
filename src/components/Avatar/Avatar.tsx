import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from "react-native";
import {placeholderImages} from "../../assets";

export const Avatar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <ImageBackground
                    style={styles.image}
                    imageStyle={{borderRadius: 50}}
                    source={placeholderImages.fakeProfile1}/>
            </View>
            <Text style={styles.username}>
                Karen • Auckland
            </Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    },
    imageContainer: {
        width: 30,
        height: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    username: {
        fontWeight: 'bold',
        color: 'white'
    }
})


