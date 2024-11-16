import { motion } from 'framer-motion'

const Loader = () => {
    return (
        <div className='dark:bg-[var(--darkBackground)] h-screen w-screen flex items-center justify-center'>
            <div className='flex gap-1'>
                {
                    [...Array(3)].map((_ , i) => { 
                        return <motion.div 
                        key={i}
                        className='h-5 w-5 rounded-full bg-[var(--gradientStart)]'
                        animate={{y: [0 , -15 , 0]}}
                        transition={{duration: 0.5 , repeatDelay: i * 0.2 , repeat: Infinity}}
                        />
                    })
                }
            </div>
        </div>
    )
}

export default Loader;