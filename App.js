import React, {Component} from 'react'
import Route from "./src/routes"
import SplashScreen from 'react-native-splash-screen';
class App extends Component {
  componentDidMount() {
    SplashScreen.hide()
  }
  render(){
    return (
      <Route/>
    )
  }
}

export default App
