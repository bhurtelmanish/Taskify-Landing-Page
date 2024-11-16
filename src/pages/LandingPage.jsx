import Button from "../Components/Button";
import "../index.css";
import { FaArrowRight } from "react-icons/fa6";

const LandingPage = () => {
  return (
    <div id="landingsection" className="py-10 tablet:w-[32rem] laptop:w-auto laptop:gap-10 laptop:justify-self-start tablet:m-auto laptop:flex laptop:text-left">
        <div className="laptop:w-[45rem]">
            <header className="flex flex-col font-openSans  md:text-4xl md:leading-normal font-bold text-3xl leading-snug text-center laptop:px-0 laptop:items-start laptop:text-4xl laptop:leading-normal laptop:text-left">
                Get Ahead in Your Work
                <span className="laptop:text-left">Boost Your Productivity </span>
                <span className="bg-gradient-to-r from-[var(--gradientStart)] to-[var(--gradientEnd)] bg-clip-text text-transparent laptop:text-left">
                with Taskify
                </span>
            </header>

            <div className="mt-5 mb-4 font-medium text-[1.4rem] bg-gradient-to-r from-pink-500 to-yellow-300 bg-clip-text text-transparent font-poppins text-center laptop:text-left">
            Streamline your work with smart task organization and automation.
            </div>

            <div className="text-[var(--grayColor2)] dark:text-[var(--grayColor1)] text-justify px-4 laptop:px-0 laptop:text-left">
            Save time and stay organized with <strong>Taskify</strong>, the AI-powered tool for effortless task management. Prioritize, manage, and complete tasks with multi-folder organization, tags, and AI feedback. Stay ahead with ease.
            </div>

            <div className="font-bold font-roboto px-4 text-sm mt-2 text-slate-400 dark:text-[var(--grayColor2)] mb-4 laptop:px-0">
                Available on Web, iOS and Android.
            </div>

            <div className="px-4 laptop:px-0">
                <Button
                buttonValue="Automate your everyday tasks now"
                buttonHeight="2.6rem"
                buttonWidth="100%"
                rounded="0.3rem"
                classButton="bg-gradient-to-r from-[var(--gradientStart)] to-[var(--gradientEnd)] text-md"
                icon={<FaArrowRight />}
                />
            </div>
        </div>

      <div className="px-4 cursor-pointer laptop:px-0 flex items-start justify-items-start h-fit">
        <video
          className="h-full mt-8 rounded-xl laptop:mt-0 laptop:w-[50rem]"
          autoPlay
          muted
          loop
        >
          <source src="/demoVideo.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default LandingPage;
