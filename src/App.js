import React, { Component } from 'react';
import Clock from './components/clock/Clock';
import Market from './components/market/Market'

class App extends Component {
  state = { showClock: false, showMarket: false }
  toggleShowMarket = () => {
    const { showMarket } = this.state
    this.setState({ showMarket: !showMarket })
  }
  toggleShowClock = () => {
    const { showClock } = this.state 
    this.setState({ showClock: !showClock })
    // this.setState( state => {
    //   return { showClock: !state.showClock }
    // })
  }
  render() {
    const { showClock, showMarket } = this.state 
    return(
      <>
        { showClock && <Clock /> }
        <button onClick={this.toggleShowClock}>Toggle Clock</button>
        { showMarket && <Market /> }
        <button onClick={this.toggleShowMarket}>Toggle Market</button>
      </>
    )
  }
}
export default App;