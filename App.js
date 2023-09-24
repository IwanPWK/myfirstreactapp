/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

// import Splash from './src/screens/auth/Splash';
// import Signup from './src/screens/auth/Signup';
import Signin from './src/screens/auth/Signin';

// const WEB_CLIENT_ID =
//   '781658418249-p1f0q73d0gbtdtdsd067elar3p5762n1.apps.googleusercontent.com';

const App = () => {
  console.log(Config.GOOGLE_WEB_CLIENT_ID);
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: Config.GOOGLE_WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    });
  }, []);

  return (
    <SafeAreaView>
      <Signin />
    </SafeAreaView>
  );
};

export default App;
