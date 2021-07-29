import * as React from 'react';
import {Text, View, Button} from 'react-native';
import {baseProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const HomeScreen = ({navigation}) => {
  // USING DESTRUCTURING WE HAVE PUT NAVIAGATION THERE BECASUE THATS WHAT WE NEED FROM INSIDE PROPS
  const pressHandler = () => {
    console.log('inside home press handler');
    navigation.navigate('list');
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>this is the home screen</Text>
      <Button title="go to List screen" onPress={pressHandler} />
      <Button
        title="go to Image screen"
        onPress={() => navigation.navigate('image')}
      />
      <Button
        title="go to Counter screen"
        onPress={() => navigation.navigate('counter')}
      />

      <Button
        title="go to Color screen"
        onPress={() => navigation.navigate('color')}
      />

      <Button
        title="go to Color screen made using reducer hook"
        onPress={() => navigation.navigate('colorChange')}
      />
    </View>
  );
};

export default HomeScreen;
