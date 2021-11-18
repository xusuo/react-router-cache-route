import React, { Component, Suspense } from 'react'
import { Freeze as ReactFreeze } from 'react-freeze'
import PropTypes from 'prop-types'

import { run, get } from '../helpers'

const isSusSupported = !!Suspense
const Freeze = isSusSupported ? ReactFreeze : ({ children }) => children

export class Updatable extends Component {
  static propsTypes = {
    when: PropTypes.bool.isRequired
  }

  shouldComponentUpdate = isSusSupported ? () => true : ({ when }) => when
  render = () => (
    <Freeze Freeze={!this.props.when}>
      {run(this.props, 'children')}
    </Freeze>
  )
}
