import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'


class ContactForm extends React.Component {

  render(){
    return (
      <View style={styles.wrapper}>
        <Text>Payment successfully submitted.</Text>
        <Text>Contact Form</Text>
      </View>
  
    )
  }
  
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#EE71D7",
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  }
})

export default ContactForm