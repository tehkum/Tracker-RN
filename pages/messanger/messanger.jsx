import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Link} from 'react-router-native';

export default function Messangerpage() {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.userInfo}>
        <Link to="/chat">
          <Icons name="arrow-back" size={30} color="grey" />
        </Link>
        <Image
          source={{uri: 'https://picsum.photos/200'}}
          style={style.profile}
        />
        <View>
          <Text style={style.userName}>User Name</Text>
          <Text style={style.status}>Online</Text>
        </View>
      </View>
      <View style={style.message}>
        <View style={style.incomingMessage}>
          <Text style={style.incomingMessageText}>Hello</Text>
        </View>
        <View style={style.outgoingMessage}>
          <Text style={style.outgoingMessageText}>Hello</Text>
        </View>
        <View style={style.outgoingMessage}>
          <Text style={style.outgoingMessageText}>Hello</Text>
        </View>
        <View style={style.incomingMessage}>
          <Text style={style.incomingMessageText}>Hello</Text>
        </View>
        <View style={style.outgoingMessage}>
          <Text style={style.outgoingMessageText}>Hello</Text>
        </View>
      </View>
      <View style={style.inputSec}>
        <TextInput
          style={style.messageInput}
          placeholder="Write your message"
        />
        <View style={style.buttonSend}>
          <Icons name="send" size={20} color="#363738" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  messageInput: {
    width: '85%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#363738',
    color: 'white',
  },
  buttonSend: {
    backgroundColor: 'black',
    width: 40,
    height: 40,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    justifySelf: 'flex-end',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    gap: 10,
  },
  incomingMessageText: {
    color: 'white',
  },
  outgoingMessageText: {
    color: 'white',
  },
  status: {
    color: 'green',
    fontSize: 13,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  message: {
    flex: 1,
    padding: 10,
  },
  incomingMessage: {
    backgroundColor: 'orange',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  outgoingMessage: {
    backgroundColor: '#363738',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
});
