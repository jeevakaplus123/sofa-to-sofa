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

const ContactDetails: () => React$Node = () => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground style={styles.container}
        source={require('../images/page3/Page3.png')}>
        <View style={styles.top}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../images/logo/logo.png')} />
          </View>
          <View style={styles.welcomeContainer}>
            <Image style={styles.welcome} source={require('../images/started/started.png')} />
          </View>
          <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => alert('PAYPAL')} style={styles.button}>
          <View style={{flex: 1, alignItems: "center"}}><Image  style={{}} source={require('../images/paypal/paypal.png')} /></View>
          <Text style={styles.buttonText}>PAYPAL</Text>
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom}>
        <View style={{ flex: 1 }} />
          <View style={styles.gaeContainer}>
            <Image  style={{marginTop: 5}} source={require('../images/gae/gae.png')} />
            <Image  style={{alignSelf: "center", marginTop: -6}} source={require('../images/mail/mail.png')} />
          </View>
    <Text style={styles.text}>sofatosofa.com</Text>
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
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    marginTop: 15
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
  gaeContainer: {
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  top: {
    flex: 1,
    marginHorizontal: 15
  },
  bottom: {
    flex: 1,
  },
  buttonContainer: {
    flex: 2,
    marginBottom: 20
  },
  button: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 30,
    elevation: 1,
    padding: 22
  },
  buttonText: {
    fontSize: 20,
    flex: 1.5,
    fontWeight: "700",
    color: "#05139d"
  },
  text: {
      color: "#1ec738",
      textAlign: "center"
  }
});

export default ContactDetails
