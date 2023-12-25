/* eslint-disable react/prop-types */
const Calculator = ({ children }) => {
    return (
        <form
            className="calculator-form"
            onSubmit={(e) => {
                e.preventDefault();
            }}
        >
            {children}
        </form>
    );
};

export default Calculator;
