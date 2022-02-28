import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native';

import Screen from '../../components/Screen';
import BackButton from '../../components/BackButton';
import Icon from '../../components/Icon';
import colors from '../../core/colors';

const InfoScreen = ({navigation}) => {
    return (
        <Screen style={styles.container}>
            <View style={styles.header}>
                <BackButton goBack={navigation.goBack} />
                <Text h4 h4Style={{color: colors.white}}>{useRoute().name}</Text>
            </View>
            <View style={styles.mask} />
            <View style={styles.footer}>
                <Text style={styles.textBody}>il n'y a pas aucun Historique <Icon name='history' size={30} /></Text>
            </View>
        </Screen>
    )
}

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center'
    },
  header: {
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.primary,
      width: '100%',
      height: 50,
  },
  footer: {
      flex: 2.5,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 20,
      backgroundColor: colors.white,
  },
  mask: {
      flex: 1,
      backgroundColor: colors.primary,
      width: '100%',
      height: 30,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      zIndex: -1,
  },
  textBody: {
      color: colors.primary,
      fontFamily: 'Roboto',
      fontSize: 18,
      fontWeight: '400',
      textTransform: 'capitalize',
      flexWrap: 'wrap'
  },
})
