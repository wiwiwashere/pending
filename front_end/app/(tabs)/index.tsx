import { Image, StyleSheet, Platform, Alert, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView, ImageBackground } from 'react-native';
import ButtonComponent from '@/components/Button';
import Camera from './camera';
import { Link, Tabs, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();
  // camera state
  const [isCameraVisible, setIsCameraVisible] = useState(false);
  const router = useRouter();

  // insets
  const insets = useSafeAreaInsets();

  // action for camera press
  const handleCameraPress = () => {
    // navigation.navigate('./(tabs)/camera');
    // setIsCameraVisible(prevState => !prevState); 
    router.push('/(tabs)/camera'); 
  };

  // action for upload button
  const handleUploadPress = () => {
    Alert.alert('upload pressed!'); 
  };

  return (
    // whole screen
    <SafeAreaView style={styles.background}>
      {/* image for full background */}
      <ImageBackground/>
      <Image
        source={require('@/assets/images/background.png')} // background image
        style={StyleSheet.absoluteFillObject} // fill the entire screen
      />

     {/* title box */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">LUNA</ThemedText> // title

        {/* welcome user and greet them by name */}
        <ThemedText type="welcome">welcome, kayla</ThemedText>

        {/* container for subtitle / instructions */}
        <ThemedView style={[styles.stepContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
          {/* mini thing to tell users what to do */}
          <ThemedText type="subtitle">get started by scanning or uploading a food label</ThemedText>

          {/* scan Button */}
          {/* <ButtonComponent onPress={handleCameraPress} title="SCAN" /> */}

          <ButtonComponent title="SCAN" onPress={handleCameraPress}/>
        
          {/* upload button */}
          <ButtonComponent onPress={handleUploadPress} title="UPLOAD" />
          
        </ThemedView>

      </ThemedView>

      {/* Conditionally render Camera component */}
      {isCameraVisible && <Camera />}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'transparent',
    marginTop: 50,
  },
  stepContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 0,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

    // starter code fomr expo
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 1: Try it</ThemedText>
    //     <ThemedText>
    //       Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
    //       Press{' '}
    //       <ThemedText type="defaultSemiBold">
    //         {Platform.select({
    //           ios: 'cmd + d',
    //           android: 'cmd + m',
    //           web: 'F12'
    //         })}
    //       </ThemedText>{' '}
    //       to open developer tools.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 2: Explore</ThemedText>
    //     <ThemedText>
    //       Tap the Explore tab to learn more about what's included in this starter app.
    //     </ThemedText>
    //   </ThemedView>
    //   <ThemedView style={styles.stepContainer}>
    //     <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
    //     <ThemedText>
    //       When you're ready, run{' '}
    //       <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
    //       <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
    //       <ThemedText type="defaultSemiBold">app-example</ThemedText>.
    //     </ThemedText>
    //   </ThemedView>