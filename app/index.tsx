import GridButton from "@/components/GridButton";
import Grid from "@/components/Grid"
import { Button, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const Index = () => {
  return (
    <View>
      <Text>This is going to be my app</Text>
      <View>
        <Grid>
          
        </Grid>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
    color: "#857234"
  },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Index;