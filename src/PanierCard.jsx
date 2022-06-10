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
          <Button style={styles.button}
          title="Supprimer"
          color="#a64ac9"
          accessibilityLabel="Supprimer cet article du panier"
        />
        </View>



    );
};

export default VetementCard;


const styles = StyleSheet.create({
    layout:{
        padding:5,
        marginLeft: 20,
    },
    photo: {
      width: 120,
      height: 120,
      marginTop: 20,
    },
    nom:{
      fontFamily: "Roboto",
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: 20,
    },  
    prix: {
      fontFamily: "Roboto",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 20,
    }
    
  });