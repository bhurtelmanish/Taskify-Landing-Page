import { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import "./index.css";
import LandingPage from "./pages/LandingPage";
import WhyUs from "./pages/WhyUs";
import HowItWorks from "./pages/HowItWorks";
import Button from "./Components/Button";
import { FaArrowUp } from "react-icons/fa6";
import { Link } from "react-scroll";
import Loader from "./Components/Loader";

const App = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(() => {
    return localStorage.getItem("isDarkMode") == "true";
  });

  const [initialPageLoading, setInitialPageLoading] = useState(true);

  useEffect(() => {
    const loaderTimeOut = setTimeout(() => {
      setInitialPageLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loaderTimeOut);
    };
  }, []);

  return initialPageLoading == true ? (
    <div
      className={`${
        isDarkModeActive ? "dark" : ""
      } transition-colors transform duration-500`}
    >
      <Loader />
    </div>
  ) : (
    <>
      <div
        className={`${
          isDarkModeActive ? "dark" : ""
        } transition-colors transform duration-500`}
      >
        <div className="dark:bg-[var(--darkBackground)] w-screen">
          <div className="max-w-[var(--maxWidth)] m-auto relative">
            <Navbar
              isDarkModeActive={isDarkModeActive}
              setIsDarkModeActive={setIsDarkModeActive}
            />
            
            <section className=" dark:bg-[var(--darkBackground)] h-auto dark:text-[var(--lightColor)] laptop:px-12 px-4 pb-20 py-[var(--navbarHeight)]">
              <LandingPage />
              <WhyUs />
              <HowItWorks />
            </section>
            <Link to="landingsection" smooth={true} duration={100}>
              <Button
                buttonValue={<FaArrowUp className="text-xl" />}
                buttonColor="var(--blueColor)"
                buttonHeight="3rem"
                buttonWidth="3rem"
                rounded="50%"
                position="fixed"
                botton="2rem"
                right="2rem"
                classButton="text-sm fixed bottom-5 right-10"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
