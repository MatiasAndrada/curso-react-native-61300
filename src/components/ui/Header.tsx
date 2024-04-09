import { Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../../styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/auth/authSlice";

//Types
import type { RootState } from "../../store";
//import { deleteSession } from "../../db";

function Header({ title }: { title: string }) {
  const { localId, user } = useSelector((state: RootState) => state.authReducer.value);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    //const deletedSession = await deleteSession({ localId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {user && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      )}
      {/* {user ? (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      ) : null} */}
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 50,
    width: "100%",
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  logoutIcon: {
    position: "absolute",
    right: 20,
  },
});