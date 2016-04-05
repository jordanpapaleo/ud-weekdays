'use strict'

import React, {
  Component,
  PropTypes,
  Text,
  View
} from 'react-native'

export default class DayItem extends Component {
  static get displayName () {
    return 'DayItem'
  }

  static propTypes () {
    return {
      daysUntil: PropTypes.number.isRequired,
      day: PropType.string.isRequired
    }
  }

  constructor (props) {
    super(props)

    this.style = this.style.bind(this)
    this.color = this.color.bind(this)
    this.fontWeight = this.fontWeight.bind(this)
    this.fontSize = this.fontSize.bind(this)
    this.lineHeight = this.lineHeight.bind(this)
  }

  render () {
    const { daysUntil, day } = this.props

    if (!day) {
      return null
    }

    return (
      <View>
        <Text style={this.style(daysUntil)}>{day}</Text>
      </View>
    )
  }

  style (daysUntil) {
    return {
      color: this.color(daysUntil),
      fontWeight: this.fontWeight(daysUntil),
      fontSize: this.fontSize(daysUntil),
      lineHeight: this.lineHeight(daysUntil)
    }
  }

  color (daysUntil) {
    if (!daysUntil) {
      return `rgba(0,0,0,1)`
    }

    const opacity = 1 / daysUntil
    console.info('daysUntil', daysUntil, opacity)
    return `rgba(0,0,0,${opacity})`
  }

  fontWeight (daysUntil) {
    const weight = (7 - daysUntil)
    // Font weight always has to be factor of 100
    return `${weight * 100}`
  }

  fontSize (daysUntil) {
    return 60 - (6 * daysUntil)
  }

  lineHeight (daysUntil) {
    return 70 - (4 * daysUntil)
  }
}
