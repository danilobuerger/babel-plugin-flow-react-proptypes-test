// @flow

import React, { Component } from "react"
import { View } from "react-native"

type Props = { test: string }

class App extends Component<Props> {
  render() {
    return <View />
  }
}

export default () => <App />
