import React, { Component } from 'react'
import { AsyncStorage, ActivityIndicator } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, connect } from 'react-redux'
import { persistStore, autoRehydrate } from 'redux-persist'
import { Router, Scene } from 'react-native-router-flux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './src/ducks'

import Lectures from './src/containers/Lectures'
import Setting from './src/containers/Setting'

import NavIcon from './src/components/NavIcon'

const RouterWithRedux = connect()(Router)
const store = compose(
  applyMiddleware(thunk, logger),
  autoRehydrate()
)(createStore)(reducers)

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      hydrated: false
    }
  }

  componentWillMount () {
    persistStore(store, { storage: AsyncStorage, blacklist: ['lectures'] }, () => {
      this.setState({ hydrated: true })
    })
  }

  render () {
    if (this.state.hydrated) {
      return (
        <Provider store={store}>
          <RouterWithRedux>
            <Scene key='root'>
              <Scene key='lectures' title='休講情報' component={Lectures} renderLeftButton={NavIcon} />
              <Scene key='setting' title='設定' component={Setting} />
            </Scene>
          </RouterWithRedux>
        </Provider>
      )
    } else {
      return (
        <ActivityIndicator animating={!this.state.hydrated} size='large' style={{ paddingTop: 240 }} />
      )
    }
  }
}
