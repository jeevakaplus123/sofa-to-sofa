
import React, {PureComponent} from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import style from "./Input.stylesheet"

class Input extends PureComponent{
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    handleOnChange = (e) => {
      const { onChange, name } = this.props
        if (typeof onChange === "function") {
            if (typeof name !== "undefined") {
                onChange(e, name)
            }
            else {
                onChange(e)
            }
        }
}

    render() {        
        const {
            value, name,onChange, editable, maxLength, placeholder, secureTextEntry, keyboardType, label, errorMsg, isInvalid
        } = this.props
        return (
            <View style={style.container}>
                <View style={style.inputBox}>
                    {label ? <Text style={style.label}>{label}</Text> : null}
                    <View style={style.row}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        maxLength={maxLength}
                        editable={editable}
                        keyboardType={keyboardType}
                        onChangeText={this.handleOnChange}
                        placeholder={placeholder}
                        placeholderTextColor="#576075"
                        secureTextEntry={this.state.passwordVisibility}
                        selectionColor="#5B6778"
                        style={style.input}
                        value={value}
                        underlineColorAndroid="transparent"
                    />
                    </View>
                </View>
                { isInvalid ? <Text style={style.helpText}>{errorMsg}</Text> : null }
            </View>
        )
    }

}

export default Input