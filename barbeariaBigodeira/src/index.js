import Login from './Login';
import Register from './Register';

import { createDrawerNavigator } from 'react-navigation';

const StackNavigator = createDrawerNavigator({
  Login: Login,
  Register: Register,
});

export default { StackNavigator };