import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {calcHeight, calcWidth} from '../../Utils/responsive';

export default StyleSheet.create({
  container: {
    width: calcWidth(120),
    height: calcHeight(35),
    borderRadius: calcWidth(20),
    backgroundColor: COLORS.green,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: COLORS.white,
    fontWeight: '600',
  },
});
