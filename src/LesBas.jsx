import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';

const LesBas = () => (
    <View style={styles.layout}>
      <Text style={styles.title}>LesBas</Text>
    </View>
  );

  export default LesBas;

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