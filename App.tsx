/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {Canvas, Rect, Shadow} from '@shopify/react-native-skia';
import React, {useState} from 'react';
import {Button, SafeAreaView} from 'react-native';

function App(): JSX.Element {
  const [isShadowed, setIsShadowed] = useState(false);

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Button
        title={isShadowed ? 'Shadow Off' : 'Shadow On'}
        onPress={() => {
          setIsShadowed(!isShadowed);
        }}
      />
      <Canvas style={{flex: 1}}>
        <Rect width={100} height={100} color="black">
          {isShadowed && <Shadow dx={10} dy={10} blur={10} color="black" />}
        </Rect>
      </Canvas>
    </SafeAreaView>
  );
}

export default App;
