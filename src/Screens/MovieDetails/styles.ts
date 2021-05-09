import {StyleSheet} from 'react-native';
import {COLORS} from '../../Common/Colors';
import {calcFont, calcHeight, calcWidth} from '../../Utils/responsive';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  head: {
    fontSize: calcFont(32),
    fontWeight: 'bold',
  },
  image: {
    width: calcWidth(200),
    height: calcHeight(300),
    borderRadius: calcWidth(12),
  },
  name: {
    fontSize: calcFont(30),
    fontWeight: 'bold',
    marginVertical: calcHeight(15),
  },
  rate: {
    fontSize: calcFont(25),
    fontWeight: 'bold',
    color: COLORS.green,
  },
  sectionTitle: {
    marginTop: calcHeight(25),
    fontSize: calcFont(22),
    fontWeight: '700',
  },
  overView: {
    marginTop: calcHeight(10),
    fontSize: calcFont(16),
  },
  genersList: {
    marginTop: calcHeight(20),
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
  creditList: {
    marginTop: calcHeight(15),
    paddingBottom: calcHeight(20),
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: calcWidth(8),
  },
  creditImage: {
    width: calcWidth(80),
    height: calcWidth(80),
    borderRadius: calcWidth(40),
    margin: calcWidth(10),
  },
  actorName: {fontSize: calcFont(18), fontWeight: '600', width: calcWidth(100)},
});
