import React, {useState} from 'react';
import {Text, ScrollView} from 'react-native';
import {styles} from './styles';
import AuthHeader from '../../../components/AuthHeader';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Seperator from '../../../components/Seperator';
import GoogleLogin from '../../../components/GoogleLogin';

const Signin = () => {
  const [checked, setChecked] = useState(false);
  const onSignUp = () => {};
  return (
    <ScrollView style={styles.container}>
      <AuthHeader title="Sign In" />
      <Input label="Email" placeholder="example@gmail.com" />
      <Input isPassword label="Password" placeholder="********" />

      <Button style={styles.button} title="Sign In" />

      <Seperator text="Or sign in with" />

      <GoogleLogin />
      <Text style={styles.footerText}>
        Don't have an account?
        <Text onPress={onSignUp()} style={styles.footerLink}>
          Sign Up here.
        </Text>
      </Text>
    </ScrollView>
  );
};

export default Signin;
