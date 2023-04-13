import {Canvas, Fill} from '@shopify/react-native-skia';
import React, {useEffect, useState} from 'react';
import {Button, SafeAreaView, Text} from 'react-native';

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
      <Text>Dev Mode: {__DEV__ ? 'Enabled' : 'Disabled'}</Text>
      <Text>Hermes: {global.HermesInternal ? 'Enabled' : 'Disabled'}</Text>
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
