import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import VetementCard from './VetementCard';
import accessoire1 from './photos/accessoire1.jpg'
import accessoire2 from "./photos/accessoire2.jpg"
import accessoire3 from "./photos/accessoire3.jpg"
import accessoire4 from "./photos/accessoire4.jpg"
import accessoire5 from "./photos/accessoire5.jpg"
import accessoire6 from "./photos/accessoire6.jpg"
import accessoire7 from "./photos/accessoire7.jpg"
import accessoire8 from "./photos/accessoire8.jpg"
import accessoire9 from "./photos/accessoire9.jpg"
import accessoire10 from "./photos/accessoire10.png"
import accessoire11 from "./photos/accessoire11.jpg"
import accessoire12 from "./photos/accessoire12.jpg"
import accessoire13 from "./photos/accessoire13.jpg"
import accessoire14 from "./photos/accessoire14.jpg"
import accessoire15 from "./photos/accessoire15.jpg"
import accessoire16 from "./photos/accessoire16.jpg"
import bas1 from "./photos/bas1.png"
import bas2 from "./photos/bas2.jpg"
import bas3 from "./photos/bas3.jpg"
import bas4 from "./photos/bas4.jpg"
import bas5 from "./photos/bas5.jpg"
import bas6 from "./photos/bas6.jpg"
import bas7 from "./photos/bas7.jpg"
import bas8 from "./photos/bas8.jpg"
import bas9 from "./photos/bas9.jpg"
import haut1 from "./photos/haut1.jpg"
import haut2 from "./photos/haut2.jpg"
import haut3 from "./photos/haut3.jpg"
import haut4 from "./photos/haut4.jpg"
import haut5 from "./photos/haut5.jpg"
import haut6 from "./photos/haut6.jpg"
import haut7 from "./photos/haut7.jpg"
import haut8 from "./photos/haut8.jpg"
import haut9 from "./photos/haut9.jpg"
import haut10 from "./photos/haut10.jpg"
import haut11 from "./photos/haut11.jpg"
import haut12 from "./photos/haut12.jpg"
import haut13 from "./photos/haut13.jpg"
import haut14 from "./photos/haut14.jpg"
import haut15 from "./photos/haut15.jpg"
import haut16 from "./photos/haut16.jpg"
import haut17 from "./photos/haut17.jpg"
import haut18 from "./photos/haut18.jpg"
import haut19 from "./photos/haut19.jpg"
import robe1 from "./photos/robe1.jpg"
import robe2 from "./photos/robe2.jpg"
import robe3 from "./photos/robe3.jpg"
import robe4 from "./photos/robe4.jpg"
import robe5 from "./photos/robe5.jpg"
import robe6 from "./photos/robe6.jpg"
import robe7 from "./photos/robe7.jpg"


const LesCoupsDeCoeur = () => {

  const vetement = [
    {
        id : 1,
        nom: "collier doré",
        prix : 12,
        photo : accessoire1

    },
    {
        id:2,
        nom: "lunettes jaunes",
        prix: 18,
        photo: accessoire2
    },
    {
      id:3,
      nom: "lunettes de soleil",
      prix: 17,
      photo: accessoire3
  },
  {
    id:4,
    nom: "casquette",
    prix: 7,
    photo: accessoire4
  },
  {
    id:5,
    nom: "beret à pois",
    prix: 9,
    photo: accessoire5
  },
  {
    id:6,
    nom: "lunettes de soleil",
    prix: 7,
    photo: accessoire6
  },
  {
    id:7,
    nom: "montre rose",
    prix: 18,
    photo: accessoire7
  },
  {
    id:8,
    nom: "casquette glace",
    prix: 22,
    photo: accessoire8
  },
  {
    id:9,
    nom: "pochette rouge",
    prix: 7,
    photo: accessoire9
  },
  {
    id:10,
    nom: "sac en cuir",
    prix: 12,
    photo: accessoire10
  },
  {
    id:11,
    nom: "chaussures à talons",
    prix: 28,
    photo: accessoire11
  },
  {
    id:12,
    nom: "beret rouge",
    prix: 34,
    photo: accessoire12
  },
  {
    id:13,
    nom: "paillettes",
    prix: 7,
    photo: accessoire13
  },
  {
    id:14,
    nom: "foulard",
    prix: 7,
    photo: accessoire14
  },
  {
    id:15,
    nom: "chaussures roses",
    prix: 4,
    photo: accessoire15
  },
  {
    id:16,
    nom: "lunettes",
    prix: 7,
    photo: accessoire16
  },
  {
    id:17,
    nom: "pantalon blanc",
    prix: 32,
    photo: bas1
  },
  {
    id:18,
    nom: "pantalon cuir",
    prix: 22,
    photo: bas2
  },
  {
    id:19,
    nom: "pantalon jaune à carreaux",
    prix: 7,
    photo: bas3
  },
  {
    id:20,
    nom: "pantalon jaune",
    prix: 12,
    photo: bas4
  },
  {
    id:21,
    nom: "pantalon bicolore",
    prix: 17,
    photo: bas5
  },
  {
    id:22,
    nom: "salopette à carreaux",
    prix: 15,
    photo: bas6
  },
  {
    id:23,
    nom: "jupe rouge",
    prix: 7,
    photo: bas7
  },
  {
    id:24,
    nom: "patalon léopard",
    prix: 15,
    photo: bas8
  },
  {
    id:25,
    nom: "jupe à pois",
    prix: 13,
    photo: bas9
  },
  {
    id:26,
    nom: "t-shirt",
    prix: 7,
    photo: haut1
  },
  {
    id:27,
    nom: "veste jaune",
    prix: 7,
    photo: haut2
  },
  {
    id:28,
    nom: "haut jaune",
    prix: 7,
    photo: haut3
  },
  {
    id:29,
    nom: "tailleur noir à sequins",
    prix: 7,
    photo: haut4
  },
  {
    id:30,
    nom: "t-shirt Bowie",
    prix: 7,
    photo: haut5
  },
  {
    id:31,
    nom: "veste orange",
    prix: 7,
    photo: haut6
  },
  {
    id:32,
    nom: "haut rose",
    prix: 7,
    photo: haut7
  },
  {
    id:33,
    nom: "haut noir",
    prix: 7,
    photo: haut8
  },
  {
    id:34,
    nom: "veste longue",
    prix: 7,
    photo: haut9
  },
  {
    id:35,
    nom: "t-shirt noir",
    prix: 7,
    photo: haut10
  },
  {
    id:36,
    nom: "t-shirt rouge",
    prix: 7,
    photo: haut11
  },
  {
    id:37,
    nom: "top jaune",
    prix: 7,
    photo: haut12
  },
  {
    id:38,
    nom: "veste verte",
    prix: 7,
    photo: haut13
  },
  {
    id:39,
    nom: "crop top",
    prix: 7,
    photo: haut14
  },
  {
    id:40,
    nom: "haut en cuir",
    prix: 7,
    photo: haut15
  },
  {
    id:41,
    nom: "haut rose",
    prix: 7,
    photo: haut16
  },
  {
    id:42,
    nom: "crop top noir",
    prix: 7,
    photo: haut17
  },
  {
    id:43,
    nom: "t-shirt wild",
    prix: 7,
    photo: haut18
  },
  {
    id:44,
    nom: "t-shirt faces",
    prix: 7,
    photo: haut19
  },
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
  {
    id:49,
    nom: "robe blanche",
    prix: 7,
    photo: robe5
  },
  {
    id:50,
    nom: "robe rose",
    prix: 7,
    photo: robe6
  },
  {
    id:51,
    nom: "robe rouge",
    prix: 7,
    photo: robe7
  },
]

return (
    <ScrollView style={styles.layout}>
      <View style={styles.cardsContainer}>
      {vetement.map(
                  ({ id, nom, prix, photo }) => {
                    return (
                      <VetementCard
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
    </ScrollView>
    )
};

export default LesCoupsDeCoeur;

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    fontSize: 32,
    marginBottom: 16,
  },
});