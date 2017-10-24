import React from 'react';
import CityStore from '../stores/CityStore';
import { Text } from 'react-native';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { city: CityStore.getCity() };
  }

  componentDidMount() {
    this.cityStoreToken = CityStore.addListener(() => {
      this.setState({ city: CityStore.getCity() });
    });
  }

  componentWillUnmount() {
    this.cityStoreToken.remove();
  }

  render() {
    return <Text>{this.state.city}</Text>;
  }
}

export default MainView;
