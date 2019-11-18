import React from 'react';
import { View, Button, Text } from 'react-native';

const Register = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Cadastro</Text>
  </View>
);

Register.navigationOptions = {
  title: 'Cadastro',
}

export default Register;