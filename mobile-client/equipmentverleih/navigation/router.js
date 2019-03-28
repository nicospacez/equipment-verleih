
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { createBottomTabNavigator, createStackNavigator, DrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { HomeScreen } from '../screens/HomeScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { EquipmentScreen } from '../screens/EquipmentScreen';
import { WarenkorbScreen } from '../screens/WarenkorbScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { ListScreen } from '../screens/ListScreen';
import { colors } from '../theme';
import { StartupScreen } from '../screens/StartupScreen';
import { AdminScreen } from '../screens/AdminScreen';
import { AusleihScreen } from '../screens/AusleihScreen';
import { AddProductScreen } from '../screens/AddProductScreen';
import { AdminMenuScreen } from '../screens/AdminMenuScreen';
import { AddCategoryScreen } from '../screens/AddCategoryScreen';






export const DetailNavigator = createStackNavigator({
  EquipmentScreen: {
    screen: EquipmentScreen
  },
  DetailScreen: {
    screen: DetailScreen
  }

},
  {
    navigationOptions: {
      title: 'Equipment',
      initialRouteName: 'EquipmentScreen',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.headerbartext
    }
  }
);

export const HomeNavigator = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  ListScreen: {
    screen:ListScreen
  },
  ProfileScreen:{
    screen: ProfileScreen
  },
  DetailScreen:{
    screen: DetailScreen
  }
},
  {
    navigationOptions: {
      title: 'Home',
      initialRouteName: 'HomeScreen',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.headerbartext
    }
  }
);

export const WarenkorbNavigator = createStackNavigator({
  WarenkorbScreen: {
    screen: WarenkorbScreen
  }
},
  {
    navigationOptions: {
      title: 'Warenkorb',
      initialRouteName: 'WarenkorbScreen',
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: colors.headerbartext
    }
  }
);

export const AdminNavigator = createStackNavigator({
 
  AdminScreen: {
    screen: AdminScreen
  },
  DetailScreen:{
    screen: DetailScreen
  },
  AusleihScreen: {
    screen: AusleihScreen
  },
  AddProductScreen: {
    screen: AddProductScreen
  },
  AddCategoryScreen:{
    screen: AddCategoryScreen
  },
  AdminMenuScreen: {
    screen: AdminMenuScreen
  }
},
  {
    navigationOptions: {
      title: 'Adminbereich',
      initialRouteName: 'AdminScreen',
      headerStyle: {
        backgroundColor: colors.primary
      },
      headerTintColor: colors.headerbartext
    }
  }
);






export const TabNav = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={24} color={tintColor} />
      )
    }
  },
  EquipmentScreen: {
    screen: DetailNavigator,
    navigationOptions: {
      tabBarLabel: "Equipment",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-camera" size={24} color={tintColor} />
      )
    }
  },
  // WarenkorbScreen: {
  //   screen: WarenkorbNavigator,
  //   navigationOptions: {
  //     tabBarLabel: "Warenkorb",
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="md-cart" size={24} color={tintColor} />
  //     )
  //   }
  // }
}, {
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.primary2,
      style: {
        backgroundColor: colors.primary
      }
    }
  }
);


//BOTTOM NAVIGATION FOR ADMINS
export const AdminNav = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeNavigator,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-home" size={20} color={tintColor} />
      )
    }
  },
  EquipmentScreen: {
    screen: DetailNavigator,
    navigationOptions: {
      tabBarLabel: "Equipment",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-camera" size={20} color={tintColor} />
      )
    }
  },
  // WarenkorbScreen: {
  //   screen: WarenkorbNavigator,
  //   navigationOptions: {
  //     tabBarLabel: "Warenkorb",
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="md-cart" size={20} color={tintColor} />
  //     )
  //   }
  // },
  AdminScreen: {
    screen: AdminNavigator,
    navigationOptions: {
      tabBarLabel: "Admin",
      tabBarIcon: ({ tintColor }) => (
        <Icon name="md-settings" size={20} color={tintColor} />
      )
    }
  }
}, {
    tabBarOptions: {
      activeTintColor: colors.white,
      inactiveTintColor: colors.primary2,
      style: {
        borderRadius:0,
        elevation:1,
        backgroundColor: colors.primary
      }
    }
  }
);


export const LoginNavigator = createStackNavigator({
  StartupScreen: {
    screen: StartupScreen
  },
  LoginScreen:{
    screen:LoginScreen
  },
  TabNav:{
    screen:TabNav
  }, 
  AdminNav:{
    screen:AdminNav
  }

},
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
      initialRouteName: 'StartupScreen'
    }
  });



