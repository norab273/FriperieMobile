import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';


const VetementCard = ({ id, nom, prix, photo }) => {

    const handleCardClick = () => {
            console.log("carte cliquée")
    }

    // function goUpThePage() {
    //     window.scrollTo(0, 0);
    // }

    return (
        <View style={styles.layout} onClick={handleCardClick}>
          <Image source={photo} style={styles.photo} alt="" /> 
          <Text style={styles.nom}>{nom}</Text>
          <Text style={styles.prix}>{prix} €</Text>
        </View>
    );
};

export default VetementCard;


const styles = StyleSheet.create({
    photo: {
      width: 300,
      height: 300,
    },
    nom:{
      fontFamily: "Roboto",
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 25,
    },  
    prix: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 20,
      lineHeight: 25,
      marginBottom: 20,
    }
  });