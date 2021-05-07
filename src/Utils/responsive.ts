import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Platform } from 'react-native';

const calcWidth = (pixels: number) => {
  const deviceRatio = (pixels * 100) / 375;
  return wp(deviceRatio);
};

const calcHeight = (pixels: number) => {
  const deviceRatio = (pixels * 100) / 812;
  return hp(deviceRatio);
};

const calcFontWeight = (weight: number) => {
  return Platform.OS === 'ios' ? `${weight}` : null;
};

export { calcWidth, calcHeight, calcHeight as calcFont, calcFontWeight };
