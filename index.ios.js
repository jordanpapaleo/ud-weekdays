'use strict'

import React, {
  AppRegistry,
  Component,
  PropTypes,
  StyleSheet,
  Text,
  View
} from 'react-native'

import moment from 'moment'
import DayItem from './src/DayItem.js'


// create a react component
class Weekdays extends Component {
  static get displayName () {
    return 'Weekdays'
  }

  render () {
    return (
      <View style={styles.container}>
        { this.renderDays() }
      </View>
    )
  }

  renderDays () {
    const dayItems = []

    for (let i = 0, j = 7; i < j; i++) {
      const day = moment().add(i, 'days').format('dddd')
      dayItems.push(
        <DayItem day={day} daysUntil={i} key={i} />
      )
    }

    return dayItems
  }
}

// Style Component
const styles = StyleSheet.create({
  container: {
    flex: 1, // height 100% width 100%
    justifyContent: 'center', // center vertically
    alignItems: 'center', // center horizontally
    flexDirection: 'column'
  }
})

// Show component on screen
AppRegistry.registerComponent('weekdays', () => Weekdays)
