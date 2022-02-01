import MenuScreen from './MenuScreen';
import { NativeRouter, Route, Routes, Link} from "react-router-native";
const GameRoutes = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" element={<MenuScreen/>}/>
      </Routes>
    </NativeRouter>
  );
}

export default GameRoutes;