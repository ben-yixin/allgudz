import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from "react-native";
import Swiper from 'react-native-deck-swiper'
import {placeholderImages} from "../../../assets";
import {LinearGradient} from "expo-linear-gradient";

export const SwipeCards = () => {
    return (
        <View style={styles.container}>
            <Swiper
                marginBottom={100}
                marginTop={100}
                infinite
                disableBottomSwipe
                disableTopSwipe
                cards={['YOOO', 'ALLGOODZ', 'WE RICH']}
                renderCard={(card) => {
                    return (
                        <View style={styles.card}>

                            <ImageBackground style={styles.imageBackground}
                                             imageStyle={styles.image}
                                             source={placeholderImages.carPlaceholder}>
                                <LinearGradient style={styles.gradient} colors={['transparent','rgba(0,0,0,0.9)']}>
                                    <View style={styles.cardDetails}>
                                        <Text style={styles.name}>Bugatti</Text>
                                        <Text style={styles.description}>Mint Condition</Text>
                                    </View>
                                </LinearGradient>

                            </ImageBackground>
                        </View>
                    )
                }}
                onSwiped={(cardIndex) => {
                    console.log(cardIndex)
                }}
                onSwipedAll={() => {
                    console.log('onSwipedAll')
                }}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize={3}>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
    gradient: {
        height: '100%',
        borderRadius: 20,
    },
    card: {
        flex: 1,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: "black",
        justifyContent: "center",
        backgroundColor: 'white',
    },
    cardDetails: {
        padding: 12,
        position: 'absolute',
        bottom: 40
    },
    imageBackground: {
        flex: 1,
    },
    image: {
        borderRadius: 20
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: 'white',
    }
});
