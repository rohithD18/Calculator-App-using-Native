import { View } from "react-native";
import { Provider } from "react-redux";
import CalculatorApp from "./src/CalculatorApp";
import Store from "./src/redux/Store";

export default function App() {
  return (
    <View>
      <Provider store={Store}>
        <CalculatorApp />
      </Provider>
    </View>
  );
}
