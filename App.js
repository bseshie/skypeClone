import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ChatListItem  from './src/components/ChatListItem';
import ChatScreen from './screens/ChatScreen';
 
const chat ={
  "id": "1",
  "user": {
    "id": "u2",
    "name": "Reece",
    "image": "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    "status": "Hey there!"
  },
  "lastMessage": {
    "id": "m1",
    "text": "Well done this sprint, guys!",
    "createdAt": "2022-10-14T13:30:00.000Z"
  },
};

export default function App() {
  return (
    <View style={styles.container}>
     < ChatListItem chat={chat}/>
     < ChatListItem />
     < ChatListItem />
     < ChatListItem />
     < ChatListItem />
     < ChatListItem />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
