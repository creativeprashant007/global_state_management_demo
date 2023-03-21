import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {MyContext} from '../MyContext';

const MyComponent: React.FC = () => {
  const {myState, setMyState} = useContext(MyContext);

  const handleClick = () => {
    setMyState('New value');
  };

  return (
    <View>
      <Text>{myState}</Text>
      <Button title="Change state" onPress={handleClick} />
    </View>
  );
};

export default MyComponent;
