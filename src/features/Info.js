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

const Info: () => React$Node = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.container}
        source={require('../images/page2/Page2.png')}>
        <View style={styles.top}>
          <View style={styles.headerContainer}>
            <Image style={styles.header} source={require('../images/header/header.png')} />
          </View>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../images/logo/logo.png')} />
          </View>
        </View>
        <View style={styles.bottom}>
          <View style={{ flex: 1 }}>
            <View style={styles.flex2Container}>
              <Image  source={require('../images/1/1.png')} />
            </View>
            <View style={styles.flex1Container}>
              <Image source={require('../images/2/2.png')} />
            </View>
            <View style={styles.talkContainer}>
              <Image  style={{ width: 220, height: 120}} source={require('../images/talk/talk.png')} />
            </View>
            <View style={styles.row}>
            <View style={{ flex: 1 }}>
            <Image style={{ height: 30 }} source={require('../images/5/5.png')} />
            </View>
            <View style={{ flex: 2.5 }}>
            <Image style={styles.direct} source={require('../images/title/title.png')} />
            </View>

            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('ContactDetails')} style={styles.button}><Text style={styles.text}>NEXT -></Text></TouchableOpacity>
        </View>

      </ImageBackground>
    </View>

  )
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#EE71D7",
    flex: 1,
  },
  container: {
    flex: 1,
    margin: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: -16
  },
  direct: {
    alignSelf: "center",
    marginRight: 5
  },
  logo: {
    width: 75,
    height: 75,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 5
  },
  headerContainer: {
    alignItems: "center",
    flex: 0.1
  },
  header: {
    height: 50,
    width: width - 10
  },
  title: {
    marginTop: -10
  },
  titleContainer: {
    flex: 0.5,
    marginTop: 5,
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  second: {
    marginTop: -20
  },
  talkContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  flex1: {
    flex: 1
  },
  flex1Container: {
    flexDirection: "row",
    marginTop: -5,
    justifyContent: "center",
    flexWrap: "wrap"
  },
  flex2Container: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  top: {
    flex: 1,
    marginHorizontal: 15
  },
  bottom: {
    flex: 3,
  },
  button: {
    backgroundColor: "#EE71D7",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 17
  },
  text: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff"
  }
});

export default Info
