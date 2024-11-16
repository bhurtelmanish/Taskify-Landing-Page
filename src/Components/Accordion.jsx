import { useState } from "react"
import { IoAdd } from "react-icons/io5";
import { HiOutlineXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from 'framer-motion';
import { data } from '../assets/Data'

const Accordion = () => {

    const [accordionData , setAccordionData] = useState(data);

    const accordionActive = (index) => {
        accordionData.map((data) => data.active = false) //Change all the accordion active to false

        //This changes the selected index accordion's active to true
        const updatedData = [...accordionData];
        updatedData[index].active = true;
    
        // Update the state with the new data(this cause to rerender and changes are reflected)
        setAccordionData(updatedData);
    };
    

    return (
        <div className=" w-full px-5 laptop:mt-2 laptop:px-14">
            {
                accordionData.map((accordion , index) => (
                    <div key={index} className="border-slate-200 dark:border-slate-700 dark:border-b-[0.5px] border-b cursor-pointer py-3">
                        <div className="flex justify-between"  onClick={() => accordionActive(index)}>
                            <header className={`flex gap-2 text-[1.2rem] font-semibold ${accordion.active ? "text-[var(--blueColor)]" : ""}`}>
                                <span>{index + 1}. </span>
                                <span>{accordion.accordionTitle}</span>
                            </header>

                            <div>
                                {
                                    accordion.active != true ?
                                    <IoAdd className="text-3xl" onClick={() => accordionActive(index)} /> :
                                    <HiOutlineXMark className="text-3xl" />
                                }
                            </div>
                        </div>

                        <AnimatePresence>
                            {accordion.active && (
                                <motion.div 
                                    className="px-6 py-2 h-[5rem]"
                                    initial={{ opacity:0 , height: "0"}}
                                    animate={{ opacity:1 , height: "5rem"}}
                                    exit={{ opacity:0 , height: "0"}}
                                    transition={{ duration: 0.2, ease: "linear" }}
                                >
                                    {accordion.accordionDescription}
                                </motion.div>
                            )}
                        </AnimatePresence>

                    </div>
                ))
            }
        </div>
    )
}

export default Accordion;