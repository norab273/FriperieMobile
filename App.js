import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomePage from './src/HomePage';
import Catalogue from './src/Catalogue'
import Panier from './src/Panier'
import Informations from './src/Informations'
import { 
  PlayfairDisplay_400Regular,
  PlayfairDisplay_500Medium,
  PlayfairDisplay_600SemiBold,
  PlayfairDisplay_700Bold,
  PlayfairDisplay_800ExtraBold,
  PlayfairDisplay_900Black,
  PlayfairDisplay_400Regular_Italic,
  PlayfairDisplay_500Medium_Italic,
  PlayfairDisplay_600SemiBold_Italic,
  PlayfairDisplay_700Bold_Italic,
  PlayfairDisplay_800ExtraBold_Italic,
  PlayfairDisplay_900Black_Italic 
} from '@expo-google-fonts/playfair-display'

const Tab = createBottomTabNavigator();

const App = () => (
  <NavigationContainer>
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'HomePage') {
          iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Catalogue') {
          iconName = focused ? 'shirt-outline' : 'shirt-outline';
        }
        else if (route.name === 'Panier') {
          iconName = focused ? 'cart-outline' : 'cart-outline';
        }
        else if (route.name === 'Informations') {
          iconName = focused ? 'information-circle-outline' : 'information-circle-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#a64ac9',
      tabBarInactiveTintColor: 'gray',
      headerStyle: {
        backgroundColor: '#ffb48f',
      },
      headerTintColor: 'black',
      headerTitleStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'PlayfairDisplay_800ExtraBold',
      },
    })}
    >
      <Tab.Screen name="HomePage" component= {HomePage} options={{ title: 'Accueil' }} />
      <Tab.Screen name="Catalogue" component={Catalogue} options={{ title: 'Catalogue' }} />
      <Tab.Screen name="Panier" component={Panier} options={{ title: 'Panier', tabBarBadge: 3 }} />
      <Tab.Screen name="Informations" component={Informations} options={{ title: 'Informations' }} />

    </Tab.Navigator>
  </NavigationContainer>
);

export default App;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f5e6cc",
    fontFamily: 'PlayfairDisplay_800ExtraBold'
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
    fontFamily: 'PlayfairDisplay_800ExtraBold',
  },
});