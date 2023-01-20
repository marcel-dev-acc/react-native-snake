import React from 'react';
import {
  Image,
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
      {props.direction === 'up' && (
        <Image
          source={require('../../assets/img/snake-head-up.png')}
          style={{
            width: props.size,
            height: props.size,
          }}
        />
      )}
      {props.direction === 'down' && (
        <Image
          source={require('../../assets/img/snake-head-down.png')}
          style={{
            width: props.size,
            height: props.size,
          }}
        />
      )}
      {props.direction === 'left' && (
        <Image
          source={require('../../assets/img/snake-head-left.png')}
          style={{
            width: props.size,
            height: props.size,
          }}
        />
      )}
      {props.direction === 'right' && (
        <Image
          source={require('../../assets/img/snake-head-right.png')}
          style={{
            width: props.size,
            height: props.size,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    // backgroundColor: COLOURS.RED,
    position: 'absolute',
  },
});

export default Head;
