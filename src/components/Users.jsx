import { View, Text, StyleSheet } from "react-native";

function Users(props) {
  return (
    <View style={style.container}>
      <Text style={style.text}>{props.user}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {},
  text: {
    marginTop: 45,
    fontSize: 45,
    color: "blue",
  },
});

export default Users;
