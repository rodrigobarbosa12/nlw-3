import React, { useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import api from '../utils/api';
import { Orphanage } from './types';

import mapMarker from '../images/map-marker.png';

const OrphanagesMap = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useFocusEffect(() => {
      api.orphanages().then(response => {
        setOrphanages(response.data);
      });
  }, []);

  const navigation = useNavigation();

  const handleNavigateToOrphanageDetails = (id: number) => {
    navigation.navigate('OrphanageDetails', { id });
  };

  const handleNavigateToCreateOrphanage = () => {
    navigation.navigate('SelectMapPosition');
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -23.6285829,
          longitude: -46.5064266,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008
        }}
      >
        {orphanages.map(orphanage => (
          <Marker
            key={orphanage.id}
            icon={mapMarker}
            calloutAnchor={{
              x: 2.7,
              y: 0.9
            }}
            coordinate={{
              latitude: orphanage.latitude,
              longitude: orphanage.longitude,
            }}
          >
            <Callout
              tooltip
              onPress={() => handleNavigateToOrphanageDetails(orphanage.id)}
            >
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>{orphanage.name}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <View style={styles.footer}>
          <Text style={styles.footerText}>
            {orphanages.length} orfanatos encontrados
            </Text>
          <RectButton style={styles.createOrphanageButton} onPress={handleNavigateToCreateOrphanage}>
            <Feather name="plus" size={20} color="#FFF"/>
          </RectButton>
      </View>
    </View>
);
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },

    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderRadius: 16,
      justifyContent: 'center',
    },

    calloutText: {
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold',
    },

    footer: {
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,

      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,

      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',

      elevation: 3,
    },

    footerText: {
      fontFamily: 'Nunito_700Bold',
      color: '#8fa7b3'
    },
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,

      justifyContent: 'center',
      alignItems: 'center'
    }
  });

export default OrphanagesMap;
