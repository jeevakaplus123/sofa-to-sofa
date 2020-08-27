import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  ImageBackground,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native'

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

const { width, height } = Dimensions.get('window')

const Home: () => React$Node = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.container}
        source={require('../images/page1/firstpage.png')}>
        <View style={styles.top}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../images/logo/logo.png')} />
          </View>
          <View style={styles.welcomeContainer}>
            <Image style={styles.welcome} source={require('../images/welcome/welcome.png')} />
          </View>
          <View style={styles.welcomeContainer}>
            <Image style={styles.welcome} source={require('../images/looking/looking.png')} />
          </View>
          <View style={{ borderWidth: 0.8, marginTop: -12, marginBottom: 5, marginHorizontal: 10 }} />
          <View style={styles.thenContainer}>
            <Image style={styles.then} source={require('../images/then/then.png')} />
          </View>
          <View style={styles.needContainer}>
            <Image style={styles.need} source={require('../images/need/need.png')} />
          </View>
        </View>
        <View style={styles.bottom}>
        <View style={{ flex: 1 }}/>
        <TouchableOpacity onPress={() => navigation.navigate('Info')} style={styles.button}><Text style={styles.text}>C'mon in ! -></Text></TouchableOpacity>
        </View>

      </ImageBackground>
    </View>

  )
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#EE71D7",
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 5,
  },
  logo: {
    width: 75,
    height: 75,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 5
  },
  welcome: {
    flex: 1
  },
  welcomeContainer: {
    flex: 1.8,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: -5
  },
  then: {
    flex: 3
  },
  thenContainer: {
    flex: 3,
    alignItems: "center"
  },
  need: {
    flex: 2
  },
  needContainer: {
    flex: 2,
    alignItems: "center",
    marginTop: -5
  },
  top: {
    flex: 2,
    marginHorizontal: 15
  },
  bottom: {
    flex: 0.8,
  },
  button: {
    backgroundColor: "#EE71D7",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 18
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff"
  }
});

export default Home
