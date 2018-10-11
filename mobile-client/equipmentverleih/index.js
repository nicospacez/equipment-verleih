/** @format */

import {AppRegistry} from 'react-native';

import {name as appName} from './app.json';
import { LoginNavigator } from './navigation/router';

AppRegistry.registerComponent(appName, () => LoginNavigator);
