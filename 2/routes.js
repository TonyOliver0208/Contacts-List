import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {MaterialIcons} from '@expo/vector-icons';
import colors from '../utils/colors';
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
import Favorites from '../3/screens/Favorites';
import User from '../3/screens/User';

// Helper function to get tab bar icon
const getTabBarIcon =
  icon =>
  ({tintColor}) =>
    <MaterialIcons name={icon} size={26} style={{color: tintColor}} />;

const getDrawerItemIcon =
  icon =>
  ({tintColor}) =>
    <MaterialIcons name={icon} size={22} style={{color: tintColor}} />;

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

// Contacts screens stack navigator
const ContactsScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Contacts"
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: 'tomato'},
        headerTitleAlign: 'center',
        //new
        headerShown: false,
      }}>
      <Stack.Screen
        name="Contacts"
        component={Contacts}
        options={{title: 'Contacts'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={({route}) => {
          const {contact} = route.params;
          const {name} = contact;
          return {
            title: name.split(' ')[0],
            headerTintColor: 'white',
            headerStyle: {
              backgroundColor: colors.blue,
            },
          };
        }}
      />
    </Stack.Navigator>
  );
};

// Favorites screens stack navigator
const FavoritesScreens = () => {
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        //new
        headerShown: false,
      }}>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};

// User screens stack navigator
const UserScreens = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="User">
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitle: 'Me',
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: colors.blue,
          },
          headerRight: () => (
            <MaterialIcons
              name="settings"
              size={24}
              style={{color: 'white', marginRight: 10}}
              onPress={() => navigation.navigate('Options')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{title: 'Options'}}
      />
    </Stack.Navigator>
  );
};

// Tab navigator
const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="ContactsScreens"
        barStyle={{backgroundColor: colors.blue}}
        labeled={false}
        activeColor={colors.greyLight}
        inactiveColor={colors.greyDark}>
        <Tab.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            tabBarIcon: getTabBarIcon('list'),
          }}
        />
        <Tab.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            tabBarIcon: getTabBarIcon('star'),
          }}
        />
        <Tab.Screen
          name="UserScreens"
          component={UserScreens}
          options={{
            tabBarIcon: getTabBarIcon('person'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="ContactsScreens">
        <Drawer.Screen
          name="ContactsScreens"
          component={ContactsScreens}
          options={{
            drawerIcon: getDrawerItemIcon('list'),
          }}
        />
        <Drawer.Screen
          name="FavoritesScreens"
          component={FavoritesScreens}
          options={{
            drawerIcon: getDrawerItemIcon('star'),
          }}
        />
        <Drawer.Screen
          name="UserScreens"
          component={UserScreens}
          options={{
            drawerIcon: getDrawerItemIcon('person'),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

// export default TabNavigator;

export default DrawerNavigator;
