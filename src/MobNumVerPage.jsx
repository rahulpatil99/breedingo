import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function MobNumVerPage() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (text) => {
    setPhoneNumber(text);
  };

  const handleNext = () => {
    navigation.navigate('OtpVer', { phoneNumber }); 
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('LangPage')}
      >
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Enter your Phone number</Text>
      </View>
      <Text style={styles.subText}>Enter your Phone number to get OTP</Text>
      <TextInput 
        style={styles.input}
        placeholder=""
        keyboardType="phone-pad"
        maxLength={10}
        value={phoneNumber}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={[styles.button, styles.nextButton]} onPress={handleNext}>
        <Text style={{ fontSize: 16, color: '#ffffff', textAlign: 'center' }}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
  container: {
    flex: 1,
    padding: 40, 
  },
  textContainer: {
    marginTop: 200,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: '600', 
  },
  subText: {
    marginHorizontal: 60,
    marginTop: 8,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 35,
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
    paddingHorizontal: 30, 
    marginTop: 10,
    marginBottom: 15
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
