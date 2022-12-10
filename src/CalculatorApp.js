import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { clearButton, evaluateAnswer, loadButtons, operatorButtons } from "./redux/Action";

const CalculatorApp = () => {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.number);
 
  const operators = ["+", "-", ".", "/", "*"];

  const getAnswer=(inputValue)=>{
    if(!operators.some((operators)=> inputValue.endsWith(operators))){
      dispatch(evaluateAnswer(inputValue))
    }
  }
  const inputValues =(btn)=>{
     dispatch(loadButtons(btn))
  }
  const operationValues = (btn)=>{
    if(!operators.some((operators)=> inputValue.endsWith(operators)) && inputValue.length != 0){
      dispatch(operatorButtons(btn))
    }
   
  }

  return (
    <View style={styles.calculatorApp}>
      <Text style={{ fontSize: 30 }}>CalculatorApp</Text>
      <View style={styles.inputView}>
        <TextInput
          style={[
            styles.inputMath,
            { color: inputValue === "error" ? "red" : "white", textAlign: 'right' },
          ]}
          placeholder="0"
          value={inputValue}
        />
      </View>
      <View style={styles.allButtons}>
        <View style={styles.calcData}>
          <TouchableOpacity
            style={styles.calButton}
            onPress={() => inputValues(1)}
          >
            <Text style={{ fontSize: 25 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputValues(2)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputValues(3)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calcData}>
          <TouchableOpacity
            onPress={() => inputValues(4)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>inputValues(5)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputValues(6)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calcData}>
          <TouchableOpacity
            onPress={() => inputValues(7)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputValues(8)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputValues(9)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.calcData}>
          <TouchableOpacity
            onPress={() => dispatch(clearButton())}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => inputValues(0)}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 25 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => operationValues(".")}
            style={styles.calButton}
          >
            <Text style={{ fontSize: 30 }}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.mathButtons}>
          <TouchableOpacity
            onPress={() => operationValues("+")}
            style={styles.operationButton}
          >
            <Text style={{ fontSize: 25 }}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => operationValues("-")}
            style={styles.operationButton}
          >
            <Text style={{ fontSize: 30 }}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => operationValues("*")}
            style={styles.operationButton}
          >
            <Text style={{ fontSize: 25 }}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => operationValues("/")}
            style={styles.operationButton}
          >
            <Text style={{ fontSize: 25 }}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={()=>getAnswer(inputValue)}
            style={styles.operationButton}
          >
            <Text style={{ fontSize: 30 }}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  calculatorApp: {
    marginTop: 50,
  },
  inputView: {
    marginTop: 250,
    backgroundColor:'#111432',
    paddingVertical:18
  },
  allButtons: {
    backgroundColor:'#111432'
  },
  inputMath: {
    borderWidth: 1,
    borderColor:'lightgrey',
    height: 65,
    paddingHorizontal: 10,
    fontSize: 25,
    marginHorizontal: 5,
  },
  calcData: {
    flexDirection: "row",
    alignItems: "center",
  },
  calButton: {
    borderWidth: 1,
    width: 90,
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "lightgrey",
  },
  mathButtons: {
    position: "absolute",
    right: 0,
  },
  operationButton: {
    borderWidth: 1,
    width: 75,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 5,
    backgroundColor: "lightgrey",
  },
});

export default CalculatorApp;
