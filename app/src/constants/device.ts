import { Dimensions } from "react-native";

const SCREEN: any = {
  MAX_WIDTH: Dimensions.get('screen').width,
  MAX_HEIGHT: Dimensions.get('screen').height,
  GRID_SIZE: 15,
  CELL_SIZE: 20,
};

export default SCREEN;