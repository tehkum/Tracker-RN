import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Link} from 'react-router-native';

export default function Chatpage() {
  const data = [
    {
      name: 'User1',
      profile: 'https://picsum.photos/200',
      lastMessage:
        'Sample message jdbfjsb jsdfwdhfdkjahfkj jjfehjhfhjkhsfdkjea fewhfkuhsdkjhk',
      lastTime: '21:00',
    },
    {
      name: 'User2',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User3',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User4',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User5',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User6',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User7',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User8',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User9',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User10',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User11',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User12',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User13',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User14',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User15',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User16',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User17',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User18',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User19',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
    {
      name: 'User20',
      profile: 'https://picsum.photos/200',
      lastMessage: 'Sample message',
      lastTime: '21:00',
    },
  ];

  return (
    <View>
      <View style={style.chatList}>
        {data.map((item, index) => (
          <Link key={index} to="/messanger">
            <View style={style.singleChat}>
              <Image source={{uri: item.profile}} style={style.profileImage} />
              <View style={style.chatContent}>
                <View>
                  <Text style={style.chatName}>{item.name}</Text>
                  <Text style={style.lastMessage} numberOfLines={1}>
                    {item.lastMessage}
                  </Text>
                </View>
                <Text style={style.chatTime}>{item.lastTime}</Text>
              </View>
            </View>
          </Link>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  singleChat: {
    flexDirection: 'row',
    gap: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderBottomStyle: 'solid',
    padding: 5,
    paddingBottom: 7,
    paddingTop: 7,
    alignItems: 'center',
    width: '100%',
    position: 'relative',
  },
  chatList: {
    flexDirection: 'column',
    // gap: 10,
  },
  chatContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  chatTime: {
    alignSelf: 'center',
    color: 'grey',
    position: 'absolute',
    right: 0,
    top: 0,
  },
  chatName: {
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'grey',
  },
});






