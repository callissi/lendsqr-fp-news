// screens/GoogleSignup.js
import React from 'react';
import { View, Button } from 'react-native';

const GoogleSignup = ({ route }) => {
  const { name, phone, email } = route.params;

  const handleGoogleSignup = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      // Save user info in Firebase Firestore or Realtime Database with name, phone, and email
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <Button title="Sign up with Google" onPress={handleGoogleSignup} />
    </View>
  );
};

export default GoogleSignup;
