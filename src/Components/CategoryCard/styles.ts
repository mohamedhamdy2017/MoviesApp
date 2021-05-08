import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {calcHeight, calcWidth} from '../../Utils/responsive';

export default StyleSheet.create({
  container: {
    width: calcWidth(100),
    height: calcHeight(35),
    borderRadius: calcWidth(20),
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: calcWidth(5)
  },
  title: {
    color: COLORS.black,
    fontWeight: '700',
  },
  selection: {
    backgroundColor: COLORS.green,
    color: COLORS.white
  }
});
