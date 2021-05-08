import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {calcFont, calcHeight, calcWidth} from '../../Utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
    height: calcHeight(185),
    borderRadius: calcWidth(20),
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: calcHeight(5),
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
    borderWidth: 0.5,
    borderColor: COLORS.gray,
    padding: calcWidth(15),
    flexDirection: 'row',
    marginVertical: calcHeight(8)
  },
  image: {
    width: calcWidth(100),
    height: calcHeight(150),
    borderRadius: calcWidth(10),
  },
  details: {
    marginLeft: calcWidth(15),
  },
  title: {
    fontSize: calcFont(20),
    fontWeight: '700',
    marginBottom: calcHeight(12),
  },
  date: {
    fontSize: calcFont(14),
    fontWeight: '600',
  },
  generView: {
    width: calcWidth(75),
    backgroundColor: COLORS.gray,
    marginHorizontal: calcWidth(5),
    height: calcHeight(25),
    borderRadius: calcWidth(20),
    alignItems: 'center',
    justifyContent: 'center',
    padding: calcWidth(4),
    marginBottom: calcHeight(8),
  },
  gener: {
    fontSize: calcFont(12),
  },
  rate: {
    position: 'absolute',
    bottom: calcHeight(20),
    right: calcWidth(20),
    fontSize: calcFont(20),
    color: COLORS.green,
    fontWeight: '800',
  },
});
