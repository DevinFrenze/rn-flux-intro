import React from 'react';
import AppDispatcher from '../AppDispatcher';
import CityStore from '../stores/CityStore';
import CityActions from '../actions/CityActions';
import CountryStore from '../stores/CountryStore';
import CountryActions from '../actions/CountryActions';
import { Picker, Text, View } from 'react-native';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    const cityStoreState = CityStore.getState();
    const countryStoreState = CountryStore.getState();
    this.state = {
      city: cityStoreState.selectedCity,
      cityOptions: cityStoreState.cityOptions,
      country: countryStoreState.selectedCountry,
      countryOptions: countryStoreState.countryOptions
    };
  }

  componentDidMount() {
    this.cityStoreToken = CityStore.addListener(() => {
      const cityStoreState = CityStore.getState();
      console.log('city store listener');
      this.setState({
        city: cityStoreState.selectedCity,
        cityOptions: cityStoreState.cityOptions
      });
    });

    this.countryStoreToken = CountryStore.addListener(() => {
      const countryStoreState = CountryStore.getState();
      console.log('country store listener');
      this.setState({
        country: countryStoreState.selectedCountry,
        countryOptions: countryStoreState.countryOptions
      });
    });
  }

  componentWillUnmount() {
    this.cityStoreToken.remove();
    this.countryStoreToken.remove();
  }

  changeCity(city) {
    AppDispatcher.dispatch(CityActions.selectedCity(city));
  }

  changeCountry(country) {
    AppDispatcher.dispatch(CountryActions.selectedCountry(country));
  }

  render() {
    const { city, cityOptions, country, countryOptions } = this.state;
    return (
      <View>
        <Picker
          selectedValue={city}
          onValueChange={this.changeCity}
        >
          {this.renderPickerItems(cityOptions)}
        </Picker>
        <Picker
          selectedValue={country}
          onValueChange={this.changeCountry}
        >
          {this.renderPickerItems(countryOptions)}
        </Picker>
      </View>
    );
  }

  renderPickerItems(items) {
    return (items || []).map((item, index) => {
      return <Picker.Item label={item} value={item} key={index}/>
    });
  }
}

export default MainView;
