import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={style.header}>
      <View style={style.fullLogo}>
        <Text style={style.logoOne}>T</Text>
        <Text style={style.logo}>racker</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    padding: 4,
    height: 50,
    justifyContent: 'center',
  },
  logo: {
    color: 'white',
    fontSize: 20,
  },
  logoOne: {
    color: 'orange',
    fontSize: 20,
  },
  fullLogo: {
    flexDirection: 'row',
  },
});
