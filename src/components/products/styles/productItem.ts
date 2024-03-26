import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  cardContainer: {
    margin: 10, // Agrega margen
    backgroundColor: colors.highlightBackground,
  },
  imageCard: {
    height: 250, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: "cover", // Usa "cover" para mantener la proporción y cubrir el contenedor
    margin: 10, // Elimina el margen de la imagen
  },
  contentContainer: {
    padding: 10, // Agrega relleno interno al contenido
  },
  textCard: {
    color: colors.textPrimary,
    fontSize: 18,
  },
  priceText: {
    color: colors.textSecondary, // Cambia el color del texto del precio según tus preferencias
    marginTop: 5, // Agrega margen superior al precio
  },
  actionsCard: {
    justifyContent: "flex-end", // Alinea los elementos al final de la tarjeta
    /*     backgroundColor: colors.highlight, */
  },
  buttonCard: {
    color: colors.textPrimary,
    backgroundColor: colors.lowlightBackground,
  },
});
