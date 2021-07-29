import * as React from 'react';
import {Text, View, Button} from 'react-native';

const ListScreen = props => {
  const pressHandler = () => {
    //props.navigation.navigate('home');
    props.navigation.goBack(); // WE CAN USE THE GO BACK METHOD TO GO BACK ALSO
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>this is the List screen</Text>
      <Button
        title="go to home"
        onPress={() => props.navigation.navigate('home')}
      />
    </View>
  );
};

export default ListScreen;
