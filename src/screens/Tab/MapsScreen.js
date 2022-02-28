import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useRoute } from '@react-navigation/native';

import MapView, {Marker} from 'react-native-maps';

import BackButton from '../../components/BackButton';
import colors from '../../core/colors';

export default function MapsScreen({route, navigation}) {

	const { values, displayCurrentAddress } = route.params;

	console.log(displayCurrentAddress)

	const position = {
 			  longitude: parseFloat(values.station.Longitude),
		      latitude: parseFloat(values.station.Latitude),
		      latitudeDelta: 0.09,
		      longitudeDelta: 0.09,
			};
	const station = {
		longitude: 10.17981,
		latitude: 36.78580,
	}

    return (
		<View>
			<View style={styles.header}>
					<BackButton goBack={navigation.goBack} />
					<Text h4 h4Style={{color: colors.white}}>{useRoute().name}</Text>
				</View>
			
			<MapView region={position} style={{ width: '100%', height: '100%' }} >
				<Marker coordinate={position} />
				<Marker coordinate={station} />
			</MapView>
		</View>
        
    )
}

const styles = StyleSheet.create({})
