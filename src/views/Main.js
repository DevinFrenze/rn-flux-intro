import React from 'react';
import AppDispatcher from '../AppDispatcher';
import CityStore from '../stores/CityStore';
import CityActions from '../actions/CityActions';
import CountryStore from '../stores/CountryStore';
import CountryActions from '../actions/CountryActions';
import { Picker, View } from 'react-native';

class MainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(
      {},
      this.getCityState(),
      this.getCountryState()
    );
  }

  // listen to stores emitting changes
  componentDidMount() {
    this.cityStoreToken = CityStore.addListener(() => {
      this.setState(this.getCityState());
    });

    this.countryStoreToken = CountryStore.addListener(() => {
      this.setState(this.getCountryState());
    });
  }

  // remove stores listeners
  componentWillUnmount() {
    this.cityStoreToken.remove();
    this.countryStoreToken.remove();
  }

  getCityState() {
    const cityStoreState = CityStore.getState();
    return {
      city: cityStoreState.selectedCity,
      cityOptions: cityStoreState.cityOptions,
    };
  }

  getCountryState() {
    const countryStoreState = CountryStore.getState();
    return {
      country: countryStoreState.selectedCountry,
      countryOptions: countryStoreState.countryOptions
    };
  }

  // dispatch selected city action
  changeCity(city) {
    AppDispatcher.dispatch(CityActions.selectedCity(city));
  }

  // dispatch selected country action
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
    return items.map((item, index) => {
      return <Picker.Item label={item} value={item} key={index}/>
    });
  }
}

export default MainView;
