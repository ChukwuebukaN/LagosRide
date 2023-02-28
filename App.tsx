import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Wrapper, Status} from '@googlemaps/react-wrapper';
import MapComponent from './src/components/MapComponent';
import {API_KEY} from './src/utils/consts';

const render = (status: Status) => <Text>{status}</Text>;

const App = () => {
  return (
    <View>
      <Text style={styles.header}>
        React Native for Web On-Demand Rides and Deliveries Sample App
      </Text>
      <Wrapper
        apiKey={API_KEY}
        render={render}
        version={'beta'}
        libraries={['journeySharing']}>
        <MapComponent />
      </Wrapper>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 10,
    marginHorizontal: 15,
  },
});

export default App;
