/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Canvas,
  Circle,
  Fill,
  Group,
  LinearGradient,
  Mask,
  Rect,
  Shadow,
  Turbulence,
  interpolate,
  vec,
} from '@shopify/react-native-skia';
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView} from 'react-native';

function App(): JSX.Element {
  const [isTesting, setIsTesting] = useState(false);

  const [canvasMounted, setCanvasMounted] = useState(false);

  useEffect(() => {
    if (isTesting) {
      const interval = setInterval(() => {
        setCanvasMounted(foo => !foo);
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isTesting]);

  return (
    <SafeAreaView style={{flexGrow: 1}}>
      <Button
        title={!isTesting ? 'Start' : 'Stop'}
        onPress={() => {
          setIsTesting(!isTesting);
        }}
      />
      {canvasMounted && (
        <Canvas style={{flex: 1}}>
          <Fill color="red" />
        </Canvas>
      )}
    </SafeAreaView>
  );
}

export default App;
