import React, {useState, useEffect} from 'react';
import {
  Button,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import LinearGradient from 'react-native-linear-gradient';


export default function PhoneSignIn() {
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');
  const [countryCode, setCountryCode] = useState('91');
  const [phoneNumber, setPhoneNumber] = useState('');

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
      console.log('user', user);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

  if (!confirm) {
    return (
      <SafeAreaView style={style.container}>
        <View>
          <ImageBackground
            source={{uri: 'https://picsum.photos/200'}}
            resizeMode="cover"
            style={style.imageBackground}>
            <LinearGradient
              colors={['transparent', 'black']}
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
              }}
            />
            <Text style={style.topText}>Tracker</Text>
          </ImageBackground>
        </View>
        <View style={style.inputGrp}>
          <TextInput
            style={style.countryCode}
            value={countryCode}
            keyboardType="phone-pad"
            onChangeText={setCountryCode}
          />
          <TextInput
            placeholder="enter phone number"
            style={style.inputPhone}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>
        <TouchableOpacity
          onPress={() => signInWithPhoneNumber(phoneNumber)}
          style={style.buttonWrap}>
          <Text style={style.button}>Generate OTP</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <>
      <TextInput value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  inputPhone: {
    width: '70%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#363738',
  },
  countryCode: {
    width: '20%',
    height: 40,
    borderColor: '#000000',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 5,
    backgroundColor: '#363738',
  },
  button: {
    width: '95%',
    height: 40,
    backgroundColor: 'orange',
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
  },
  inputGrp: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  imageBackground: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonWrap: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});
