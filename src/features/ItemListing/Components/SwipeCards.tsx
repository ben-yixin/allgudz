import React, {useRef} from 'react';
import {View, StyleSheet, Text, ImageBackground, SafeAreaView, TouchableOpacity} from "react-native";
import Swiper from 'react-native-deck-swiper'
import {placeholderImages} from "../../../assets";
import {LinearGradient} from "expo-linear-gradient";
import {Shadow} from "react-native-shadow-2";
import {Octicons} from "@expo/vector-icons";

export const SwipeCards = () => {

    const swiperRef = useRef(null);

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

    const handleSwipeRight = () => {
        swiperRef.current.swipeRight();
    }

    const handleSwipeLeft = () => {
        swiperRef.current.swipeLeft();
    }


    return (
        <SafeAreaView>
            <View style={styles.swipeContainer}>
                <Swiper
                    ref={swiperRef}
                    containerStyle={styles.swipeComponentContainer}
                    marginTop={30}
                    marginBottom={200}
                    infinite
                    disableBottomSwipe
                    disableTopSwipe
                    cards={mockData}
                    renderCard={(mockData: any) => {
                        return (
                            <Shadow style={styles.swipeCardShadow}
                                    distance={1}
                                    offset={[20, 20]}
                                    startColor={"#000000ff"}
                                    endColor={"#00000000"}
                            >
                                <View style={styles.card}>
                                    <ImageBackground style={styles.imageBackground}
                                                     imageStyle={styles.image}
                                                     source={mockData.imageSrc}>
                                        <LinearGradient style={styles.gradient}
                                                        colors={['transparent', 'rgba(0,0,0,0.9)']}>
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
                    cardIndex={0}
                    stackSize={3}
                >
                </Swiper>
            </View>

            <View style={styles.cardControls}>
                <TouchableOpacity onPress={handleSwipeLeft}>
                    <Shadow
                        distance={1}
                        offset={[2, 2]}
                        startColor={"#000000ff"}
                        endColor={"#00000000"}
                    >
                        <View style={styles.dislikeBtn}>
                            <Octicons name="x" size={40} color={"#fff2e9"}/>
                        </View>
                    </Shadow>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleSwipeRight}>
                    <Shadow
                        distance={1}
                        offset={[2, 2]}
                        startColor={"#000000ff"}
                        endColor={"#00000000"}
                    >

                        <View style={styles.likeBtn}>
                            <Octicons name="heart-fill" size={30} color={"#a0ffa0"}/>
                        </View>
                    </Shadow>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    swipeContainer: {
        height: '85%'
    },
    swipeComponentContainer: {
        backgroundColor: 'white'
    },
    swipeCardShadow: {
        height: '100%',
        width: '100%'
    },
    gradient: {
        height: '100%',
        borderRadius: 20,
    },
    card: {
        height: '96%',
        width: '96%',
        borderRadius: 20,
        backgroundColor: 'black',
        borderWidth: 2,
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
        borderRadius: 20,
    },
    name: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color: 'white',
    },
    cardControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    likeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#009855',
        width: 70,
        height: 70,
        borderRadius: 50
    },
    dislikeBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        backgroundColor: '#f17356',
        width: 70,
        height: 70,
        borderRadius: 50
    },
});
