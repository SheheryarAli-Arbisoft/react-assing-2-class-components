import React, { Component, Fragment } from 'react';
import WeatherListItem from './WeatherListItem';

import { connect } from 'react-redux';

class WeatherList extends Component {
  render() {
    return (
      <Fragment>
        {!this.props.weather.loading &&
          this.props.weather.data.length > 0 &&
          this.props.weather.data.map((weather) => (
            <WeatherListItem key={weather.id} weather={weather} />
          ))}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(WeatherList);