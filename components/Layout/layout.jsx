import {
  StatusBar,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  ScrollView,
  View,
} from 'react-native';
import Header from '../Header/header';
import Footer from '../footer/footer';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function Layout({Component}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{...backgroundStyle, ...style.main}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={'black'}
      />
      <Header />
      <ScrollView>
        <Component />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  main: {
    width: '100%',
    flex: 1,
    height: '100%',
  },
});
