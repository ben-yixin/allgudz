import React from 'react';
import {View, Button, StyleSheet, Text} from "react-native";
import Swiper from 'react-native-deck-swiper'

export const SwipeCards = () => {
    return (
        <View style={styles.container}>
            <Swiper
                cards={['YOOO', 'ALLGOODZ', 'WE RICH']}
                renderCard={(card) => {
                    return (
                        <View style={styles.card}>
                            <Text style={styles.text}>{card}</Text>
                        </View>
                    )
                }}
                onSwiped={(cardIndex) => {console.log(cardIndex)}}
                onSwipedAll={() => {console.log('onSwipedAll')}}
                cardIndex={0}
                backgroundColor={'#4FD0E9'}
                stackSize= {3}>
            </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});
