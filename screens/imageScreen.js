import * as React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';

import ImageDetail from '../components/imageDetail';

const ImageScreen = props => {
  pressHandler = () => {
    props.navigation.navigate('home');
  };

  return (
    <View>
      <ImageDetail
        title="Mountain"
        imageSource={require('../assets/mountain.jpg')}
      />
      <ImageDetail
        title="Forest"
        imageSource={require('../assets/forest.jpg')}
      />
      <ImageDetail title="Beach" imageSource={require('../assets/beach.jpg')} />
      <TouchableOpacity onPress={pressHandler}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImageScreen;
