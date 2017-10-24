import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

class ChatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    title: 'Chat',
    headerRight: <Button title="info" />
  });
  render() {
    return <View style={styles.page}>
      <Text>Chat!</Text>
    </View>;
  }
}

class RecentChatsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.page}>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => navigate('Chat')}
        title="Chat"
      />
    </View>;
  }
}

class AllContactsScreen extends React.Component {
  render() {
    const { navigate } = this.props.navigation;
    return <View style={styles.page}>
      <Text>List of all contacts</Text>
      <Button
        onPress={() => navigate('Chat')}
        title="Chat"
      />
    </View>;
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen }
});

class HomeScreen extends React.Component {
  render() {
    return <View style={styles.container}>
      <Text>Hello, Navigation!</Text>
      <MainScreenNavigator navigation={this.props.navigation}/>
    </View>;
  }
}

HomeScreen.router = MainScreenNavigator.router;

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf',
    justifyContent: 'center',
  },
  page: {
    flex: 1,
    backgroundColor: '#fdf',
    alignItems: 'center'
  }
});

export default SimpleApp;
