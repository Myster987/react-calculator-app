/* eslint-disable react/prop-types */
const CalculatorButton = ({
    value = null,
    handleClick,
    type = "button",
    aditionalClassName = null,
    children,
}) => {
    return (
        <button
            className={
                aditionalClassName
                    ? `round-button ${aditionalClassName}`
                    : "round-button"
            }
            type={type}
            value={value}
            onClick={() => handleClick(value)}
        >
            {children}
        </button>
    );
};

export default CalculatorButton;
