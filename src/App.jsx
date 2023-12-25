import { useState } from "react";
import Calculator from "./components/Calculator";
import InputNumber from "./components/InputNumber";
import CalculatorButton from "./components/CalculatorButton";

const App = () => {
    const [currentInput, setCurrentInput] = useState("");

    const calculateResult = (toCalculate) => {
        try {
            return eval(toCalculate);
        } catch (error) {
            alert("Invalid input");
        }
    };

    const handleInput = (e) => {
        setCurrentInput(e.target.value);
    };

    const handleButtonClick = (val) => {
        const action = val;
        console.log(action);

        if (
            typeof action == "number" ||
            ["+", "-", "*", "/", "%", "."].includes(action)
        ) {
            setCurrentInput(currentInput + action);
        } else if (action == "C") {
            setCurrentInput("");
        } else if (action == "+/-") {
            setCurrentInput(-Number(currentInput));
        } else if (action == "=") {
            setCurrentInput(calculateResult(currentInput));
        }
    };

    return (
        <Calculator>
            <InputNumber inputValue={currentInput} handleInput={handleInput} />

            <div className="buttons-container">
                <CalculatorButton
                    aditionalClassName="gray-btn"
                    value={"C"}
                    handleClick={handleButtonClick}
                >
                    C
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="gray-btn"
                    value={"+/-"}
                    handleClick={handleButtonClick}
                >
                    +/-
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="gray-btn"
                    value={"%"}
                    handleClick={handleButtonClick}
                >
                    %
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="orange-btn"
                    value={"/"}
                    handleClick={handleButtonClick}
                >
                    /
                </CalculatorButton>

                <CalculatorButton value={7} handleClick={handleButtonClick}>
                    7
                </CalculatorButton>

                <CalculatorButton value={8} handleClick={handleButtonClick}>
                    8
                </CalculatorButton>

                <CalculatorButton value={9} handleClick={handleButtonClick}>
                    9
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="orange-btn"
                    value={"*"}
                    handleClick={handleButtonClick}
                >
                    *
                </CalculatorButton>

                <CalculatorButton value={4} handleClick={handleButtonClick}>
                    4
                </CalculatorButton>

                <CalculatorButton value={5} handleClick={handleButtonClick}>
                    5
                </CalculatorButton>

                <CalculatorButton value={6} handleClick={handleButtonClick}>
                    6
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="orange-btn"
                    value={"-"}
                    handleClick={handleButtonClick}
                >
                    -
                </CalculatorButton>

                <CalculatorButton value={1} handleClick={handleButtonClick}>
                    1
                </CalculatorButton>

                <CalculatorButton value={2} handleClick={handleButtonClick}>
                    2
                </CalculatorButton>

                <CalculatorButton value={3} handleClick={handleButtonClick}>
                    3
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="orange-btn"
                    value={"+"}
                    handleClick={handleButtonClick}
                >
                    +
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="span-two-columns"
                    value={0}
                    handleClick={handleButtonClick}
                >
                    0
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="orange-btn"
                    value={"."}
                    handleClick={handleButtonClick}
                >
                    .
                </CalculatorButton>

                <CalculatorButton
                    aditionalClassName="orange-btn"
                    value={"="}
                    handleClick={handleButtonClick}
                    type="submit"
                >
                    =
                </CalculatorButton>
            </div>
        </Calculator>
    );
};

export default App;
