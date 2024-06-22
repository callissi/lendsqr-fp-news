// screens/Signup.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Signup = ({ navigation }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleGoogleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      // Save user info in Firebase Firestore or Realtime Database
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <TextInput placeholder="Full Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Phone Number" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} />
      <Button title="Next" onPress={() => navigation.navigate('GoogleSignup', { name, phone, email })} />
    </View>
  );
};

export default Signup;
