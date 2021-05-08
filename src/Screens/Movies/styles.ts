import {StyleSheet} from 'react-native';
import {calcFont} from '../../Utils/responsive';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  head: {
    fontSize: calcFont(32),
    fontWeight: 'bold',
  },
});
