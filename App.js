import React, {useState} from 'react';
import GameRoutes from './components/GameRoutes';
import * as Font from "expo-font";
import Apploading from "expo-app-loading";

const getFonts = () =>
Font.loadAsync({
  dirtyEgo: require('./assets/fonts/DirtyEgo.ttf'),
  oregonBook: require('./assets/fonts/OregonLdoBook.ttf'),
  oregonBold: require('./assets/fonts/OregonLdoBold-gxe6.ttf'),
  oregonEx: require('./assets/fonts/OregonLdoExtended-ALWm.ttf')
});

export default function App() {
  const [fontsloaded, setFontsLoaded] = useState(false);

  if(fontsloaded){
    return (
      <GameRoutes/>
     );
  } else {
    return (
      <Apploading
        startAsync={getFonts}
        onFinish={() => {
          setFontsLoaded(true);
        }}
        onError={console.warn}
      />
    );
  }
};
