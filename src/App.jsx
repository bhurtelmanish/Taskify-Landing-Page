import { useState } from "react";
import Navbar from "./Components/Navbar";
import './index.css'
import LandingPage from "./pages/LandingPage";
import WhyUs from "./pages/WhyUs";

const App = () => {

  const [isDarkModeActive , setIsDarkModeActive] = useState(() => {
    return localStorage.getItem("isDarkMode") == "true"
  })

  return (
    <>
    <div className={`${isDarkModeActive ? "dark" : ""} transition-colors transform duration-500`}>
      <div className="dark:bg-[var(--darkBackground)] w-screen">
        <div className="max-w-[var(--maxWidth)] m-auto">
            <Navbar isDarkModeActive={isDarkModeActive} setIsDarkModeActive={setIsDarkModeActive}/>
            <section className=" dark:bg-[var(--darkBackground)] h-auto dark:text-[var(--lightColor)] laptop:px-12 px-4">
              <LandingPage />
              <WhyUs />
            </section>
        </div>
      </div>
    </div>
    </>
  )
}

export default App;