import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LesAccessoires from './photos/LesAccessoires.png'
import LesBas from './photos/LesBas.png'
import LesHauts from './photos/LesHauts.png'
import LesNouveautes from './photos/LesNouveautes.png'
import LesRobes from './photos/LesRobes.png'
import Tout from './photos/Tout.png'
import landingImage from './photos/landingImage.jpg'



const HomePage = () => {
    const nav = useNavigation();
    return (

    <ScrollView style={styles.Container}>
      <View style={styles.categoriesGrid}>
        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
            screen: 'Les nouveautés',
            })}>
            <Image style={styles.photoCategory} source={LesNouveautes} alt="" />
            <Text style={styles.text}>Les Nouveautés</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
            screen: 'Nos coups de coeur',
            })}>
            <Image style={styles.photoCategory} source={landingImage}/>
            <Text style={styles.text}> Nos Coups De Coeur</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
            screen: 'Les hauts',
            })}>
            <Image style={styles.photoCategory} source={LesHauts} alt="" />
            <Text style={styles.text}>Les Hauts</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
            screen: 'Les bas',
            })}>
            <Image style={styles.photoCategory} source={LesBas} alt="" />
            <Text style={styles.text}>Les Bas</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
            screen: 'Les robes',
            })}>
            <Image style={styles.photoCategory} source={LesRobes} alt="" />
            <Text style={styles.text}>Les Robes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
            screen: 'Les accessoires',
            })}>
            <Image style={styles.photoCategory} source={LesAccessoires} alt="" />
            <Text style={styles.text}>Les Accessoires</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.categoryContainer}>
          <TouchableOpacity  onPress={() => nav.navigate('Catalogue', {
           screen: 'Tous nos produits',
          })}>
            <Image style={styles.photoCategory} source={Tout} alt="" />
            <Text style={styles.text}>Tous nos produits</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
    );
  };

  export default HomePage;

  const styles = StyleSheet.create({
    Container: {
      flex: 1,
      flexDirection: "column",
      width: '100%',
      padding: 10,
  },
    photo: {
      width: 300,
      height: 200,
      margin: 'auto',
      position: 'relative',
      marginBottom: 50,
    },
    coupsDeCoeur: {
      fontFamily: "Playfair Display",
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 24,
      lineHeight: 40,
      paddingTop: 7,
      backgroundColor: '#ffb48f',
      width: 270,
      height: 60,
      margin: 'auto',
      cursor: 'pointer',
      position: 'absolute',
      top: 170,
      margin: 'auto',
      textAlign: 'center',
      marginBottom: 50,
    },
    categoriesGrid:{
      flex: 1,
      justifyContent: 'center',
      marginLeft: 10,
      marginRight: 10,
      flexWrap: 'nowrap',
      flexDirection: 'column',
      alignItems: 'center',
    },

    categoryContainer:{
      width: 345,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      cursor: 'pointer',

    },
    text: {
      fontFamily: "Playfair Display",
      fontStyle: 'italic',
      fontWeight: 700,
      fontSize: 30,
      lineHeight: 40,
      margin: 'auto',
    },

    photoCategory: {
      width: 300,
      height: 300,
      margin: 'auto',
      marginTop: 20,
    },

  });