import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container: {
        padding: 10
    },
    inputBox: {
        borderBottomColor: "#00000022",
        borderBottomWidth: 1
    },
    input: {
        color: '#3b4761',
        flex:1,
        fontSize: 15,
        fontFamily: "HelveticaNeue-Medium",
        height: 45
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    label: {
        color: '#49EACA',
        fontFamily: "HelveticaNeue-Light",
        fontSize: 15,
        paddingBottom: 5
    },
    helpText: {
        color: 'red',
        marginTop: 2,
        fontSize: 10,
        fontWeight: "300"
    }
})

export default  style