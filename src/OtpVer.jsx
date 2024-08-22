import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function OtpVer() {
  const navigation = useNavigation();
  const route = useRoute();
  const { phoneNumber } = route.params; 

  const handleNext = () => {
    navigation.navigate('NameInfo');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('MobNumVerPage')}
      >
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>OTP Verification</Text>
      </View>
      <View style={styles.subText}>
        <Text style={{textAlign:'center'}}>Please Check your +91-{phoneNumber} to see the verification code</Text> 
      </View>
      <View>
        <Text style={[styles.subTitle]}>OTP Code</Text>
      </View>
      <View style={styles.otpContainer}>
      <TextInput maxLength={1} style={styles.otpButtons} ></TextInput>
      <TextInput maxLength={1} style={styles.otpButtons} ></TextInput>
      <TextInput maxLength={1} style={styles.otpButtons} ></TextInput>
      <TextInput maxLength={1} style={styles.otpButtons} ></TextInput>
      </View>
      <TouchableOpacity style={[styles.button,styles.nextButton]} onPress={handleNext}>
        <Text style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    subTitle:{
      fontWeight:'bold',
      color:'black',
      fontSize:18
    },
    otpContainer:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 30,
      marginHorizontal:10
    },
    otpButtons:{
      backgroundColor: '#ddd',
      borderRadius: 5,
      fontSize: 20,
      textAlign: 'center',
      paddingVertical: 10,
      width: 60,
      marginHorizontal: 5,
    },
  container: {
    flex: 1,
    padding: 40,
  },
  subText: {
    marginHorizontal: 0,
    marginTop: 8,
    fontSize: 20,
    marginBottom:25,
  },
  textContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#0066ff',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ddd', 
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 15,
    width: '100%',
    marginVertical: 10 
  }
});
