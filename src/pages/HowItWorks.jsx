import Accordion from "../Components/Accordion";
import SectionHeader from "../Components/SectionHeader";

const HowItWorks = () => {
    return (
        <section id="howitworkssection" className="mt-10 flex flex-col gap-5 px-4 py-4">
            <SectionHeader
              SectionHeaderTitle="How It Works?"
              SectionHeaderDescription="Take Notes in Seconds, Stay Ahead for Hours" 
            />
            <div className="flex flex-col items-center">
                <Accordion />
            </div>
        </section>
    )
}

export default HowItWorks;