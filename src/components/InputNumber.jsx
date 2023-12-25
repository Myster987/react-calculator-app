/* eslint-disable react/prop-types */
const InputNumber = ({ inputValue, handleInput }) => {
    return (
        <input
            className="calculator-input"
            type="text"
            value={inputValue}
            onInput={handleInput}
            required
        />
    );
};

export default InputNumber;
