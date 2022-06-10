import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, TouchableOpacity } from 'react-native';
import PanierCard from './PanierCard'
import robe1 from "./photos/robe1.jpg"
import robe2 from "./photos/robe2.jpg"
import robe3 from "./photos/robe3.jpg"
import robe4 from "./photos/robe4.jpg"
import { useNavigation } from '@react-navigation/native';


const Panier = () => {
  const nav = useNavigation();


  const panier = [
    {
      id:45,
      nom: "robe noire",
      prix: 7,
      photo: robe1
    },
    {
      id:46,
      nom: "robe longue",
      prix: 7,
      photo: robe2
    },
    {
      id:47,
      nom: "robe orange",
      prix: 7,
      photo: robe3
    },
    {
      id:48,
      nom: "robe face",
      prix: 7,
      photo: robe4
    },
  ]
  return (
    <ScrollView style={styles.layout} contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity
      style={styles.buttonContinuer}
      onPress={() => nav.navigate('HomePage')}>
        <Text>Continuer mes achats</Text>
      </TouchableOpacity>

      <View style={styles.cardsContainer}>
      {panier.map(({ id, nom, prix, photo }) => {
          return (
            <PanierCard
              key={id}
              id={id}
              nom={nom}
              prix={prix}
              photo={photo}
            />
          );
        }
      )}
      </View>
      <View style={styles.pricesContainer}>
        <Text style={styles.Text}>Produits : 45 €</Text> 
        <Text style={styles.Text}>Livraison : 5 €</Text> 
        <Text style={styles.Total}>Total: 50 €</Text> 

        <Button style={styles.button}
          title="Valider mes achats"
          color="#a64ac9"
          accessibilityLabel="Valider mes achats et passer au paiement"
        />
      </View>
     

    </ScrollView>
  )
};
  
    

  export default Panier;

  const styles = StyleSheet.create({
    layout:{
      padding: 20,
      alignSelf: 'center',
    },
    contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContinuer:{
      color: 'black', 
      textDecorationLine: 'underline',
      fontWeight: 'bold',
      marginBottom: 10,
      alignSelf: 'left',
    },
    cardsContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignSelf: 'center',
      width:320,
    },
    pricesContainer:{
      alignItems: 'left',
      justifyContent: 'space-between',
      width: 320,
      marginTop: 20,
    },
    Text:{
      marginBottom: 5,
    },
    Total: {
      fontFamily: "Roboto",
      fontWeight: 'bold',
      fontSize: 30,
      borderTopWidth: 1,
      marginVertical: 10,
    },
  });