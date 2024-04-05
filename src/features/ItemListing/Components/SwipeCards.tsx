import React from 'react';
import {View, StyleSheet, Text, ImageBackground} from "react-native";
import Swiper from 'react-native-deck-swiper'
import {placeholderImages} from "../../../assets";
import {LinearGradient} from "expo-linear-gradient";
import {Shadow} from "react-native-shadow-2";

export const SwipeCards = () => {

    const mockData = [
        {
            imageSrc: placeholderImages.carPlaceholder,
            name: 'Bugatti',
            description: 'Mint Condition'
        },
        {
            imageSrc: placeholderImages.dumbellPlaceholder,
            name: 'dumbells',
            description: 'wanna get rid of these dumb ass bells'
        },
        {
            imageSrc: placeholderImages.housePlaceholder,
            name: 'New Mansion',
            description: 'anyone want a house?'
        }
    ]
    return (
        <View style={styles.container}>
            <Swiper
                marginBottom={100}
                marginTop={100}
                infinite
                disableBottomSwipe
                disableTopSwipe
                cards={mockData}
                renderCard={(mockData: any) => {
                    return (
                        <Shadow style={{height: '100%', width: '100%'}}
                                distance={1}
                                offset={[20, 20]}
                                startColor={"#000000ff"}
                                endColor={"#00000000"}
                        >
                            <View style={styles.card}>
                                <ImageBackground style={styles.imageBackground}
                                                 imageStyle={styles.image}
                                                 source={mockData.imageSrc}>
                                    <LinearGradient style={styles.gradient} colors={['transparent', 'rgba(0,0,0,0.9)']}>
                                        <View style={styles.cardDetails}>
                                            <Text style={styles.name}>{mockData.name}</Text>
                                            <Text style={styles.description}>{mockData.description}</Text>
                                        </View>
                                    </LinearGradient>
                                </ImageBackground>
                            </View>
                        </Shadow>
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
        height: '96%',
        width: '96%',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    cardDetails: {
        padding: 12,
        position: 'absolute',
        bottom: 40
    },
    imageBackground: {
        borderRadius: 20,
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
