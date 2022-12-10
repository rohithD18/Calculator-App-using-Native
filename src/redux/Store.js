import { legacy_createStore } from "redux";
import { calculatorReducer } from "./CalculatorReducer";

const Store = legacy_createStore(calculatorReducer);

export default Store;
