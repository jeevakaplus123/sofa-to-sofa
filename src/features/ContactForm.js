import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  NativeModules,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native'
import { Input, Button } from "../components/reusable"
var DirectSms = NativeModules.DirectSms


class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  _onChange = (value, name) => this.setState({ message: value})

  async sendDirectSms() {
    try {
        const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.SEND_SMS,
            {
                title: 'sofatosofa App Sms Permission',
                message:
                'sofatosofa App needs access to your inbox ' +
                'so you can send messages in background.',
                buttonNeutral: 'Ask Me Later',
                buttonNegative: 'Cancel',
                buttonPositive: 'OK',
            },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            DirectSms.sendDirectSms('12144250009', this.state.message);
        } else {
            console.log('SMS permission denied');
        }
    } catch (err) {
        console.warn(err);
    }
}

  render(){
    
    return (
      <View style={styles.wrapper}>
        <Text style={styles.headerText}>Payment successfully submitted.</Text>
        <Input
          onChange={(v, n) => this._onChange(v,n)}
          label="Message"
          placeholder="Enter your Message"
          name="text"
        />
        <Button onPress={() => this.sendDirectSms()} isPrimary>
      SUBMIT
    </Button>
      </View>
    )
  }
  
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#EE71D7",
    padding: 20,
    justifyContent: "center",
    flex: 1
  },
  headerText: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 25
  }
})

export default ContactForm