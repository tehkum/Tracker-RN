import {View, StyleSheet, Text} from 'react-native';
import {Link} from 'react-router-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

export default function Footer() {
  return (
    <View style={style.footer}>
      <Link to="/">
        <View style={style.iconAlign}>
          <Icons name="home" size={20} color="white" />
          <Text>Home</Text>
        </View>
      </Link>
      <Link to="/search">
        <View style={style.iconAlign}>
          <Icons name="search" size={20} color="white" />
          <Text>Search</Text>
        </View>
      </Link>
      <Link to="/chat">
        <View style={style.iconAlign}>
          <Icons name="chat" size={20} color="white" />
          <Text>Chat</Text>
        </View>
      </Link>
      <Link to="/setting">
        <View style={style.iconAlign}>
          <Icons name="settings" size={20} color="white" />
          <Text>Setting</Text>
        </View>
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    padding: 4,
  },
  iconAlign: {
    alignItems: 'center',
  },
});
