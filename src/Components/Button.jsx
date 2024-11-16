import { motion } from "framer-motion";

const Button = ({buttonValue , buttonColor , buttonHeight , buttonWidth , classButton , icon , initial, animate ,exit, transition , rounded , position , top , right}) => {
    const buttonStyles = {
        backgroundColor: buttonColor,
        height: buttonHeight,
        width: buttonWidth,
        borderRadius: rounded,
        position: position,
        top: top,
        right: right
    }
    return (
        <motion.button 
         initial={initial}
         animate={animate}
         exit={exit}
         transition={transition}
         style={buttonStyles} className={`${classButton} flex items-center justify-center gap-1 text-white`}>
            {icon}
            {buttonValue}
        </motion.button>
    )
}

export default Button;