import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';

import COLOURS from '../../constants/colours';
import SCREEN from '../../constants/device';

const Controls = ({ engine }: any) => {

  return (
    <View style={styles.controls}>
      <View style={styles.controlRow}>
        <TouchableOpacity onPress={() => { engine.dispatch({ type: 'move-up' }) }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.controlRow}>
        <TouchableOpacity onPress={() => { engine.dispatch({ type: 'move-left' }) }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
        <View style={[styles.control, { backgroundColor: COLOURS.BLACK }]}></View>
        <TouchableOpacity onPress={() => { engine.dispatch({ type: 'move-right' }) }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
      </View>
      <View style={styles.controlRow}>
        <TouchableOpacity onPress={() => { engine.dispatch({ type: 'move-down' }) }}>
          <View style={styles.control}></View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  controls: {
    width: 300,
    heigth: 300,
    flexDirection: 'column',
  },
  controlRow: {
    width: 300,
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  control: {
    width: 100,
    height: 100,
    backgroundColor: COLOURS.BLUE,
  },
});

export default Controls;
