import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Splash() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.imgstyle} source={require('../imgs/cowsplash1.jpg')}/>
            </View>
            <View>
                <Text style={styles.title}>Breeding is the way to Grow</Text>
            </View>
            <View>
                <Text style={styles.descri}>Become a part of Breedingo and help dairy farmers like you across the Indian farms to grow with Breedingo.</Text>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LangPage')}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    imgstyle: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    imageContainer: {
        width: Dimensions.get('window').width,
        height: 500,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        overflow: 'hidden',
    },
    title: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: '900',
        color: 'black',
        marginHorizontal: 60,
    },
    descri: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 10,
        marginHorizontal: 40,
        lineHeight:25
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 30,
    },
    button: {
        backgroundColor: '#0066ff',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 15,
        width: '90%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});
