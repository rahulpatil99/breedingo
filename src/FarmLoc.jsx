import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function OtpVer() {
  const navigation = useNavigation();
  
  const [stateName, setStateName] = useState('');
  const [districtName, setDistrictName] = useState('');
  const [talukaName, setTalukaName] = useState('');
  const [villageName, setVillageName] = useState('');
  const [pinCode, setPinCode] = useState('');

  const handleNext = () => {
    navigation.navigate('FarmLoc', { firstName, lastName, farmName });
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.goBack()} 
      >
      </TouchableOpacity>
      
      <View style={styles.textContainer}>
        <Text style={styles.title}>Farm Location</Text>
        <Text style={styles.subText}>Please fill your farm's location</Text>
      </View>

      <TextInput 
        style={styles.input}
        placeholder="State Name"
        value={stateName}
        onChangeText={setStateName}
      />
      
      <TextInput 
        style={styles.input}
        placeholder="District"
        value={districtName}
        onChangeText={setDistrictName}
      />

      <TextInput 
        style={styles.input}
        placeholder="Taluka"
        value={talukaName}
        onChangeText={setTalukaName}
      />
      <TextInput 
        style={styles.input}
        placeholder="Village"
        value={villageName}
        onChangeText={setVillageName}
      />
      <TextInput 
        style={styles.input}
        placeholder="Pin Code"
        value={pinCode}
        onChangeText={setPinCode}
      />

      <TouchableOpacity 
        style={[styles.button, styles.nextButton]}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>Next</Text>
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
    marginTop: 100,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: 'black',
    textAlign: 'center',
    fontWeight: '600',
  },
  subText: {
    marginHorizontal: 5,
    marginTop: 8,
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 35,
  },
  input: {
    backgroundColor: '#ddd',
    borderRadius: 10,
    fontSize: 16,
    textAlign: 'flex-start',
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 10,
    marginBottom: 15,
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
    marginVertical: 10,
  },
  nextButtonText: {
    fontSize: 16,
    color: '#ffffff',
    textAlign: 'center',
  }
});
