import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
const Informations = () => (
<ScrollView style={styles.Container}>
        <Text style={styles.Title}>A PROPOS</Text>
        <Text style={styles.Text}>Avec Fripées comme jamais, trouvez la tenue parfaite pour aller en soirée. Et de seconde main bien sûr !</Text>
        <Text style={styles.Text}>Notre promesse ? Vous serez la plus belle pour aller danser</Text>
        <Text style={styles.Title}>LIVRAISONS/RETOURS</Text>
        <Text style={styles.Text}>Livraison offerte en France Métropolitaine à partir de 50 € d’achat. </Text>
        <Text style={styles.Text}>Vous souhaitez effectuer un retour ? Vous avez jusqu’à 14 jours à partir de la date de réception de votre colis pour le faire. </Text>
        <Text style={styles.Title}>CONTACTEZ NOUS</Text>
        <Text style={styles.Text}>hello@fripeescommejamais.com</Text>
</ScrollView>
  );

  export default Informations;

  const styles = StyleSheet.create({

    Container: {
        flex: 1,
        flexDirection: "column",
        width: '100%',
        padding: 20,
    },
        Title: {
        fontSize: 32,
        marginTop: 16,
        marginBottom: 16,
        fontFamily: "Roboto",
        fontWeight: 100,
        fontSize: 20,
        lineHeight: 23,
        textDecorationLine: 'underline',
        textUnderlineOffset: 7,
        textDecorationColor: '#ffb48f',

    },

    Text: {
        fontSize: 20,
        lineHeight: 25,
        textAlign: 'justify',
        marginBottom: 8,
    }
  });