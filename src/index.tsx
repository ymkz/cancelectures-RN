import { AppLoading } from 'expo'
import * as React from 'react'
import { AsyncStorage, StyleSheet } from 'react-native'
import cheerio from 'react-native-cheerio'
import { Router, Scene, Stack } from 'react-native-router-flux'
import BackButton from 'src/components/atoms/BackButton'
import RightButton from 'src/components/atoms/RightButton'
import Home from 'src/components/pages/Home'
import Setting from 'src/components/pages/Setting'
import { colors } from 'src/constants'
import { mapArrayToObjectArray } from 'src/utils'

interface State {
  fetched: boolean
  lectures: Lecture[]
  restored: boolean
  setting: {}
}

export default class extends React.PureComponent<{}, State> {
  state = {
    fetched: false,
    lectures: [],
    restored: false,
    setting: {}
  }

  componentDidMount() {
    this.restoreSetting()
    this.scrapeLectures()
  }

  restoreSetting = async () => {
    const setting = await AsyncStorage.getItem('setting')
    if (setting) {
      this.setState({ restored: true, setting: JSON.parse(setting) })
    }
  }

  scrapeLectures = async (page: number = 1) => {
    const res = await fetch(
      `http://www.kougi.shimane-u.ac.jp/selectweb/conduct_list.asp?abspage=${page}`
    )
    const html = await res.text()
    const scrape = cheerio.load(html)
    const current = Number(scrape('.nowpagenum').text())
    const pages = scrape('.pagenum')
      .map((_, e) => scrape(e).text())
      .get()
      .map(v => Number(v))
    const raw = scrape('.DataField')
      .map((_, e) => scrape(e).text())
      .get()
    const array = raw.map(v => (v === '' ? 'N/A' : v))
    const data = mapArrayToObjectArray(array)
    this.setState({ lectures: [...this.state.lectures, ...data] })
    if (current < Math.max.apply(null, pages)) {
      this.scrapeLectures(current + 1)
    } else {
      this.setState({ fetched: true })
    }
  }

  handleValueChange = (value: boolean, name: string): void => {
    this.setState(
      { setting: { ...this.state.setting, [name]: value } },
      async () => {
        await AsyncStorage.setItem(
          'setting',
          JSON.stringify(this.state.setting)
        )
      }
    )
  }

  render() {
    const { restored, fetched, setting, lectures } = this.state
    if (restored && fetched) {
      return (
        <Router>
          <Stack key="root" navigationBarStyle={styles.navigationBarStyle}>
            <Scene
              key="home"
              component={() => <Home setting={setting} lectures={lectures} />}
              title="休講情報"
              titleStyle={styles.titleStyle}
              renderRightButton={RightButton}
            />
            <Scene
              key="setting"
              component={() => (
                <Setting
                  setting={setting}
                  handleValueChange={this.handleValueChange}
                />
              )}
              title="設定"
              titleStyle={styles.titleStyle}
              backTitle="Back"
              renderBackButton={BackButton}
            />
          </Stack>
        </Router>
      )
    } else {
      return <AppLoading />
    }
  }
}

const styles = StyleSheet.create({
  navigationBarStyle: {
    backgroundColor: colors.white
  },
  titleStyle: {
    color: colors.black
  }
})
