import React, {useState} from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import COLOURS from '../../constants/colours';

const Head = (props: any) => {

  return (
    <View
      style={[styles.head, {
        width: props.size,
        height: props.size,
        left: props.position[0] * props.size,
        top: props.position[1] * props.size,
      }]}
    >

    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    backgroundColor: COLOURS.RED,
    position: 'absolute',
  },
});

export default Head;
