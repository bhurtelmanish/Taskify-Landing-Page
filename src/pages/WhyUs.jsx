import { IoMdTime } from "react-icons/io";
import { FaTasks } from "react-icons/fa";
import { FaRocket } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa6";
import { MdManageSearch } from "react-icons/md";
import WhyUsCard from "../Components/WhyUsCard";
import SectionHeader from "../Components/SectionHeader";


const WhyUs = () => {
    return (
        <section id="whyussection" className="flex flex-col gap-5 px-4 py-4 ">
            {/* This is the Section header component for every page that requires it */}
            <SectionHeader
              SectionHeaderTitle="Why Choose Taskify?"
              SectionHeaderDescription="Work with AI by Your Side, Every Step of the Way" 
            />
            <div className="flex flex-wrap gap-6 w-full justify-center md:mt-3">
                <WhyUsCard whyUsCardIcon={<IoMdTime className="text-2xl text-[var(--blueColor)]"/>}  whyUsCardTitle ="Save Time" whyUsCardDescription="Focus on what matters. Let AI handle the busywork of organizing your notes so you can reclaim your time and dedicate it to high-impact tasks." />

                <WhyUsCard whyUsCardIcon={<FaTasks className="text-xl text-[var(--blueColor)]"/>}  whyUsCardTitle =" Get More Done" whyUsCardDescription="Boost your productivity. Capture thoughts quickly, stay on top of your workload, and move through tasks with greater efficiency." />

                <WhyUsCard whyUsCardIcon={<FaRocket className="text-xl text-[var(--blueColor)]"/>}  whyUsCardTitle ="Work Smart, Not Hard" whyUsCardDescription="Leverage AI for effortless organization. TalkNotes makes it easy to stay productive and efficient without the hassle of manual note-taking." />

                <WhyUsCard whyUsCardIcon={<FaBrain className="text-xl text-[var(--blueColor)]"/>}  whyUsCardTitle ="Get Ahead Instead of Left Behind" whyUsCardDescription="Stay competitive in an AI-driven world. Using AI isn't optional — it's essential. Keep pace with modern tools to maintain your edge." />

                <WhyUsCard whyUsCardIcon={<FaClipboardCheck className="text-xl text-[var(--blueColor)]"/>}  whyUsCardTitle ="Never Miss a Thing" whyUsCardDescription="Capture every idea, every detail. TalkNotes helps you avoid information overload by keeping all your thoughts organized and accessible whenever you need them." />

                <WhyUsCard whyUsCardIcon={<MdManageSearch className="text-3xl text-[var(--blueColor)]"/>}  whyUsCardTitle ="Stay Organized" whyUsCardDescription="Turn chaos into clarity. With customizable templates and automatic structuring, TalkNotes ensures that every thought and idea is right where you need it." />
            </div>
        </section>
    )
}

export default WhyUs;