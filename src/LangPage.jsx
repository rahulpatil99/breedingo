  import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
  import React, { useState } from 'react';
  import { useNavigation } from '@react-navigation/native';
  import Ionicons from 'react-native-vector-icons/FontAwesome';
  


  export default function LangPage() {
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const navigation = useNavigation();

    const handleLanguageSelect = (language) => {
      setSelectedLanguage(language);
    };

    const handleNext = () => {
      if (selectedLanguage=='ENGLISH') {
        navigation.navigate('MobNumVerPage', { language: selectedLanguage });
      }
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate('Splash')}
        ><Ionicons name="chevron-back-outline" size={24} color='black'/>
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <Text style={styles.txt}>
            Select the language
          </Text>
          <Text style={[styles.subText,{marginBottom:30}]}>
            Please select the appropriate language for you
          </Text>
          </View>
          <TouchableOpacity
            style={[styles.button, selectedLanguage === 'ENGLISH' && styles.selectedButton]}
            onPress={() => handleLanguageSelect('ENGLISH')}
          >
            <Text style={[styles.buttonText, selectedLanguage === 'ENGLISH' && styles.selectedButtonText]}>
              English
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedLanguage === 'MARATHI' && styles.selectedButton]}
            onPress={() => handleLanguageSelect('MARATHI')}
          >
            <Text style={[styles.buttonText, selectedLanguage === 'MARATHI' && styles.selectedButtonText]}>
              Marathi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, selectedLanguage === 'HINDI' && styles.selectedButton]}
            onPress={() => handleLanguageSelect('HINDI')}
          >
            <Text style={[styles.buttonText, selectedLanguage === 'HINDI' && styles.selectedButtonText]}>
              Hindi
            </Text>
          </TouchableOpacity>
        
          <Text style={{fontSize:16,marginTop:8,marginBottom:15}}>
            Select only one language
          </Text>
          <TouchableOpacity
            style={[styles.button, styles.nextButton]}
            onPress={handleNext}
            disabled={!selectedLanguage}
          >
            <Text style={[{fontSize:16},{color:'#ffffff'},{textAlign:'center'}]}>Select</Text>
          </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 40,
    },
    textContainer: {
      marginTop:130,
      alignItems: 'center',
    },
    txt: {
      fontWeight: '600',
      fontSize: 29,
       color: 'black',
        textAlign: 'center' 
    },
    subText: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 8,
     
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
    backButtonText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    button: {
      backgroundColor: '#ddd', 
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 15,
      width: '100%',
      marginVertical: 10 
    },
    selectedButton: {
      backgroundColor: '#0066ff', 
    },
    buttonText: {
      color: '#000000',
      fontSize: 16,
    },
    selectedButtonText: {
      color: '#fff', 
    },
    nextButton: {
      backgroundColor: '#0066ff',
      marginTop: 20,
    },
  });
