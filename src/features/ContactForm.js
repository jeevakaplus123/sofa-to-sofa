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
import SendSMS from 'react-native-sms'


class ContactForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      message: ""
    }
  }

  _onChange = (value, name) => this.setState({ message: value})

  sendSMS = () => {
    SendSMS.send({
      body:  this.state.message,
      recipients: ['2144250009'],
      successTypes: ['sent', 'queued'],
      allowAndroidSendWithoutReadPermission: true
  }, (completed, cancelled, error) => {

      console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

  });
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
        <Button onPress={() => this.sendSMS()} isPrimary>
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