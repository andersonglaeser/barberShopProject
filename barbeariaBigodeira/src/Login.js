import React from 'react';
import { View, Button, Text } from 'react-native';

const Login = ({ navigation }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home ;D</Text>
    <Button 
      title="Ir para Cadastros"
      onPress={() => navigation.navigate('Register') }
    />
  </View>
);

Login.navigationOptions = {
  title: 'Login',
}

export default Login;