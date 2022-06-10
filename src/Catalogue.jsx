import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Tous from './Tous'
import LesHauts from './LesHauts'
import LesBas from './LesBas'
import LesRobes from './LesRobes'
import LesAccessoires from './LesAccessoires'
import LesNouveautes from './LesNouveautes'
import LesCoupsDeCoeur from './LesCoupsDeCoeur'

const Drawer = createDrawerNavigator();

const Catalogue = () => (
    <Drawer.Navigator initialRouteName="Tous" >
      <Drawer.Screen name="Tous nos produits" component={Tous} />
      <Drawer.Screen name="Les hauts" component={LesHauts} />
      <Drawer.Screen name="Les bas" component={LesBas} />
      <Drawer.Screen name="Les robes" component={LesRobes} />
      <Drawer.Screen name="Les accessoires" component={LesAccessoires} />
      <Drawer.Screen name="Les nouveautés" component={LesNouveautes} />
      <Drawer.Screen name="Nos coups de coeur" component={LesCoupsDeCoeur} />
    </Drawer.Navigator>
    );

    export default Catalogue;

    const styles = StyleSheet.create({
        layout: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        title: {
          fontSize: 32,
          marginBottom: 16,
        },
      });