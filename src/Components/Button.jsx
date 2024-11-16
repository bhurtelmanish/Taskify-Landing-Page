
const Button = ({buttonValue , buttonColor , buttonHeight , buttonWidth , classButton , icon}) => {
    const buttonStyles = {
        backgroundColor: buttonColor,
        height: buttonHeight,
        width: buttonWidth
    }
    return (
        <button style={buttonStyles} className={`${classButton} flex items-center justify-center gap-1 text-white rounded-md`}>
            {icon}
            {buttonValue}
        </button>
    )
}

export default Button;